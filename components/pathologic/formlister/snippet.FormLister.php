<?php
/**
 * Created by PhpStorm.
 * User: Pathologic
 * Date: 17.01.2016
 * Time: 17:45
 *
 * @var \DocumentParser $modx
 * @var array $params
 */
if (!isset($formid)) {
    $modx->logEvent(0, 1, "Parameter &formid is not set", 'FormLister');
    return;
}

$out = '';
$FLDir = MODX_BASE_PATH . 'assets/snippets/FormLister/';
if (!isset($controller) || $controller == 'Core') {
    $params['controller'] = $controller = "Form";
}

$classname = strpos($controller, '\\') === 0 ? $controller : '\\FormLister\\'.$controller;

$DLTemplate = DLTemplate::getInstance($modx);
$templatePath = $DLTemplate->getTemplatePath();
$templateExtension = $DLTemplate->getTemplateExtension();
if (class_exists($classname) && is_a($classname, '\\FormLister\\Core', true)) {
    /** @var \FormLister\Core $FormLister */
    $FormLister = new $classname($modx, $params);
    if (!$FormLister->getFormId()) return;
    $FormLister->initForm();
    $out = $FormLister->render();
    if ($FormLister->getFormStatus() && isset($saveObject) && is_scalar($saveObject)) {
        $modx->setPlaceholder($saveObject, $FormLister);
    }

    if (!is_null($FormLister->debug)) {
        $FormLister->debug->saveLog();
    }
} else {
    $modx->logEvent(0, 1, "Controller {$classname} is missing", 'FormLister');
}
$DLTemplate->setTemplatePath($templatePath)->setTemplateExtension($templateExtension);

return $out;
