//<?php
/**
 * Updater
 *
 * show message about outdated CMS version
 *
 * @category    plugin
 * @version     0.8.8
 * @license     http://www.gnu.org/copyleft/gpl.html GNU Public License (GPL)
 * @package     evo
 * @author      Dmi3yy (dmi3yy.com)
 * @internal    @events OnManagerWelcomeHome,OnPageNotFound,OnSiteRefresh
 * @internal    @modx_category Manager and Admin
 * @internal    @properties &version=Version:;text;evocms-community/evolution &wdgVisibility=Show widget for:;menu;All,AdminOnly,AdminExcluded,ThisRoleOnly,ThisUserOnly;All &ThisRole=Show only to this role id:;string;;;enter the role id &ThisUser=Show only to this username:;string;;;enter the username &showButton=Show Update Button:;menu;show,hide,AdminOnly;AdminOnly &type=Type:;menu;tags,releases,commits;tags &branch=Commit branch:;text;1.4.x &commitCount=Commits count;text;20 &stableOnly=Offer upgrade to stable version only:;list;true,false;true
 * @internal    @legacy_names MODX.Evolution.updateNotify
 * @internal    @installset base
 * @internal    @disabled 0
 */


require MODX_BASE_PATH.'assets/plugins/updater/plugin.updater.php';