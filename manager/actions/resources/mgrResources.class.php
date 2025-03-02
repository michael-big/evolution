<?php

class mgrResources
{
    /**
     * @var array
     */
    public $types = [];
    /**
     * @var array
     */
    public $items = [];
    /**
     * @var array
     */
    public $categories = [];
    /**
     * @var array
     */
    public $itemsPerCategory = [];

    /**
     * mgrResources constructor.
     */
    public function __construct()
    {
        $this->setTypes();
        $this->queryItemsFromDB();
        $this->prepareCategoryArrays();
    }

    /**
     * @return void
     */
    public function setTypes()
    {
        global $_lang;
        $this->types['site_templates'] = [
            'title'       => $_lang["manage_templates"],
            'actions'     => [
                'edit'   => [16, 'edit_template'], 'duplicate' => [96, 'new_template'],
                'remove' => [21, 'delete_template']
            ],
            'permissions' => ['new_template', 'edit_template'],
            'name'        => 'templatename'
        ];
        $this->types['site_tmplvars'] = [
            'title'       => $_lang["tmplvars"],
            'actions'     => [
                'edit'   => [301, 'edit_template'], 'duplicate' => [304, 'edit_template'],
                'remove' => [303, 'edit_template']
            ],
            'permissions' => ['new_template', 'edit_template'],
        ];
        $this->types['site_htmlsnippets'] = [
            'title'       => $_lang["manage_htmlsnippets"],
            'actions'     => [
                'edit' => [78, 'edit_chunk'], 'duplicate' => [97, 'new_chunk'], 'remove' => [80, 'delete_chunk']
            ],
            'permissions' => ['new_chunk', 'edit_chunk'],
        ];
        $this->types['site_snippets'] = [
            'title'       => $_lang["manage_snippets"],
            'actions'     => [
                'edit' => [22, 'edit_snippet'], 'duplicate' => [98, 'new_snippet'], 'remove' => [25, 'delete_snippet']
            ],
            'permissions' => ['new_snippet', 'edit_snippet'],
        ];
        $this->types['site_plugins'] = [
            'title'       => $_lang["manage_plugins"],
            'actions'     => [
                'edit' => [102, 'edit_plugin'], 'duplicate' => [105, 'new_plugin'], 'remove' => [104, 'delete_plugin']
            ],
            'permissions' => ['new_plugin', 'edit_plugin'],
        ];
        $this->types['site_modules'] = [
            'title'       => $_lang["manage_modules"],
            'actions'     => [
                'edit' => [108, 'edit_module'], 'duplicate' => [111, 'new_module'], 'remove' => [110, 'delete_module']
            ],
            'permissions' => ['new_module', 'edit_module'],
        ];
    }

    /**
     * @return void
     */
    public function queryItemsFromDB()
    {
        foreach ($this->types as $resourceTable => $type) {
            if ($this->hasAnyPermissions($type['permissions'])) {
                $nameField = isset($type['name']) ? $type['name'] : 'name';
                $this->items[$resourceTable] = $this->queryResources($resourceTable, $nameField);
            }
        }
    }

    /**
     * @param  array  $permissions
     * @return bool
     */
    public function hasAnyPermissions($permissions)
    {
        $modx = evolutionCMS();

        foreach ($permissions as $p) {
            if ($modx->hasPermission($p)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param  string  $resourceTable
     * @param  string  $nameField
     * @return array|bool
     */
    public function queryResources($resourceTable, $nameField = 'name')
    {
        $modx = evolutionCMS();
        global $_lang;

        $allowed = [
            'site_htmlsnippets',
            'site_snippets',
            'site_plugins',
            'site_modules'
        ];
        $pluginsql = !empty($resourceTable) && in_array($resourceTable, $allowed) ? $resourceTable . '.disabled, ' : '';

        $tvsql = '';
        $tvjoin = '';
        if ($resourceTable === 'site_tmplvars') {
            $tvsql = 'site_tmplvars.caption, ';
            $tvjoin = sprintf('LEFT JOIN %s AS stt ON site_tmplvars.id=stt.tmplvarid GROUP BY site_tmplvars.id,reltpl',
                $modx->getFullTableName('site_tmplvar_templates'));
            $sttfield = 'IF(stt.templateid,1,0) AS reltpl,';
        } else {
            $sttfield = '';
        }

        $selectableTemplates = $resourceTable === 'site_templates' ? "{$resourceTable}.selectable, " : "";

        $rs = $modx->db->select(
            "{$sttfield} {$pluginsql} {$tvsql} {$resourceTable}.{$nameField} as name, {$resourceTable}.id, {$resourceTable}.description, {$resourceTable}.locked, {$selectableTemplates}IF(isnull(categories.category),'{$_lang['no_category']}',categories.category) as category, categories.id as catid",
            $modx->getFullTableName($resourceTable) . " AS {$resourceTable}
	            LEFT JOIN " . $modx->getFullTableName('categories') . " AS categories ON {$resourceTable}.category = categories.id {$tvjoin}",
            "",
            "category,name"
        );
        $limit = $modx->db->getRecordCount($rs);

        if ($limit < 1) {
            return false;
        }

        $result = [];
        while ($row = $modx->db->getRow($rs)) {
            foreach ($row as &$item) {
                $item = str_replace(['&lt;strong&gt;', '&lt;/strong&gt;'], ['<b>', '</b>'], htmlspecialchars($item ?? ''));
            }
            $result[] = $row;
        }
        return $result;
    }

    /**
     * @return void
     */
    public function prepareCategoryArrays()
    {
        foreach ($this->items as $type => $items) {
            foreach ((array) $items as $item) {
                if (empty($item['catid'])) {
                    continue;
                }
                $catid = $item['catid'] ? $item['catid'] : 0;
                $this->categories[$catid] = $item['category'];

                $item['type'] = $type;
                $this->itemsPerCategory[$catid][] = $item;
            }
        }

        // Sort categories by name
        natcasesort($this->categories);

        // Now sort by name
        foreach ($this->itemsPerCategory as $catid => $items) {
            usort($this->itemsPerCategory[$catid], function ($a, $b) {
                return strcasecmp($a['name'], $b['name']);
            });
        }
    }
}
