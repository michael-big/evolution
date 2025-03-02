<?php
/*
*************************************************************************
	EVO Content Management System and PHP Application Framework ("EVO")
	Managed and maintained by Dmytro Lukianenko and the	EVO community
*************************************************************************
	EVO is an opensource PHP/MySQL content management system and content
	management framework that is flexible, adaptable, supports XHTML/CSS
	layouts, and works with most web browsers.

	EVO is distributed under the GNU General Public License
*************************************************************************

	This file and all related or dependant files distributed with this file
	are considered as a whole to make up EVO.

	EVO is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; either version 2 of the License, or
	(at your option) any later version.

	EVO is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with EVO (located in "/assets/docs/"); if not, write to the Free Software
	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1335, USA

	For more information on EVO please visit https://evo.im/
	Github: https://github.com/evolution-cms/evolution/

**************************************************************************
	Based on MODX Evolution CMS and Application Framework
	Copyright 2005 and forever thereafter by Raymond Irving & Ryan Thrash.
	All rights reserved.

	MODX Evolution is originally based on Etomite by Alex Butter
**************************************************************************
*/

/**
 *  Filename: index.php
 *  Function: This file is the main root file for EVO. It is
 *          only file that will be directly requested, and
 *          depending on the request, will branch different
 *          content
 */

$autoloader = realpath(__DIR__ . '/../assets/vendor/autoload.php');
if (file_exists($autoloader) && is_readable($autoloader)) {
	include_once($autoloader);
}
$autoloader = realpath(__DIR__ . '/vendor/autoload.php');
if (file_exists($autoloader) && is_readable($autoloader)) {
	include_once($autoloader);
} else {
    throw new RuntimeException('Unable to load manager autoloader.');
}
// get start time
$mtime = microtime(); $mtime = explode(" ",$mtime); $mtime = $mtime[1] + $mtime[0]; $tstart = $mtime;
$mstart = memory_get_usage();
$self      = str_replace('\\','/',__FILE__);
$self_dir  = str_replace('/index.php','',$self);
$mgr_dir   = substr($self_dir,strrpos($self_dir,'/')+1);
$base_path = str_replace($mgr_dir . '/index.php','',$self);
$site_mgr_path = $base_path . 'assets/cache/siteManager.php';
if(is_file($site_mgr_path)) include_once($site_mgr_path);
$site_hostnames_path = $base_path . 'assets/cache/siteHostnames.php';
if(is_file($site_hostnames_path)) include_once($site_hostnames_path);
if(!defined('MGR_DIR') || MGR_DIR!==$mgr_dir) {
	$src = "<?php\n";
	$src .= "define('MGR_DIR', '{$mgr_dir}');\n";
	$rs = file_put_contents($site_mgr_path,$src);
	if(!$rs) {
		echo 'siteManager.php write error';
		exit;
	}
	sleep(1);
	header('Location:' . $_SERVER['REQUEST_URI']);
	exit;
}

// we use this to make sure files are accessed through
// the manager instead of seperately.
if ( ! defined('IN_MANAGER_MODE')) {
	define('IN_MANAGER_MODE', true);
}
if (!defined('MODX_API_MODE')) {
    define('MODX_API_MODE', false);
}
if (!defined('IN_PARSER_MODE')) {
    define('IN_PARSER_MODE', false);
}

// harden it
require_once(__DIR__ . '/includes/protect.inc.php');

// send anti caching headers
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("X-UA-Compatible: IE=edge;FF=3;OtherUA=4");
header('X-XSS-Protection: 0');

// provide english $_lang for error-messages
$_lang = array();
include_once __DIR__ . "/includes/lang/english.inc.php";

// check PHP version. EVO is compatible with php 5 (5.0.0+)
$php_ver_comp =  version_compare(phpversion(), "5.0.0");
		// -1 if left is less, 0 if equal, +1 if left is higher
if($php_ver_comp < 0) {
	echo sprintf($_lang['php_version_check'], phpversion());
	exit;
}

// check if iconv is installed
if(!function_exists('iconv')) {
	echo $_lang['iconv_not_available'];
	exit;
}

// set some runtime options
$incPath = str_replace("\\","/",dirname(__FILE__)."/includes/"); // Mod by Raymond
set_include_path(get_include_path() . PATH_SEPARATOR . $incPath);

if (!defined('ENT_COMPAT')) define('ENT_COMPAT', 2);
if (!defined('ENT_NOQUOTES')) define('ENT_NOQUOTES', 0);
if (!defined('ENT_QUOTES')) define('ENT_QUOTES', 3);

// set the document_root :|
if(!isset($_SERVER['DOCUMENT_ROOT']) || empty($_SERVER['DOCUMENT_ROOT'])) {
	$_SERVER['DOCUMENT_ROOT'] = str_replace($_SERVER['PATH_INFO'], "", preg_replace("/\\\\/", "/", $_SERVER['PATH_TRANSLATED']))."/";
}

// include_once config file
$config_filename = realpath(__DIR__ . "/includes/config.inc.php");
if (!file_exists($config_filename)) {
	echo "<h3>Unable to load configuration settings</h3>";
	echo "Please run the EVO <a href='../install'>install utility</a>";
	exit;
}
// include the database configuration file
include_once $config_filename;

$componentsAutoloader = new \EvolutionCMS\Manager\ComponentsAutoloader(MODX_BASE_PATH . 'assets/cache/');
$componentsAutoloader->addPath(MODX_BASE_PATH . 'components/');
$componentsAutoloader->register();

// initiate the content manager class
if (isset($coreClass) && class_exists($coreClass)) {
	$modx = new $coreClass;
}
if (!isset($modx) || !($modx instanceof DocumentParser)) {
	include_once(MODX_MANAGER_PATH.'includes/document.parser.class.inc.php');
	$modx = evolutionCMS();
}

$modx->loadExtension("ManagerAPI");
$modx->getSettings();
$modx->tstart = $tstart;
$modx->mstart = $mstart;

// connect to the database
$modx->db->connect();

// start session
startCMSSession();
$modx->sid = session_id();

if (MODX_API_MODE) {
    return;
}

// Now that session is given get user settings and merge into $modx->config
$usersettings = $modx->getUserSettings();

$settings =& $modx->config;
extract($modx->config, EXTR_OVERWRITE);

// now include_once different language file as english
if(!isset($manager_language) || !file_exists(MODX_MANAGER_PATH."includes/lang/".$manager_language.".inc.php")) {
	$manager_language = "english"; // if not set, get the english language file.
}

// $length_eng_lang = count($_lang); // Not used for now, required for difference-check with other languages than english (i.e. inside installer)

if($manager_language!="english" && file_exists(MODX_MANAGER_PATH."includes/lang/".$manager_language.".inc.php")) {
	include_once "lang/".$manager_language.".inc.php";
}

// allow custom language overrides not altered by future EVO-updates
if(file_exists(MODX_MANAGER_PATH."includes/lang/override/".$manager_language.".inc.php")) {
	include_once "lang/override/".$manager_language.".inc.php";
}

$s = array('[+MGR_DIR+]');
$r = array(MGR_DIR);
foreach($_lang as $k=>$v)
{
	if(strpos($v,'[+')!==false) $_lang[$k] = str_replace($s, $r, $v);
}

// send the charset header
header('Content-Type: text/html; charset='.$modx_manager_charset);

/*
 * include_once "version.inc.php"; //include version info. Use $modx->getVersionData()
 */

// accesscontrol.php checks to see if the user is logged in. If not, a log in form is shown
include_once "accesscontrol.inc.php";

// double check the session
if(!isset($_SESSION['mgrValidated'])){
	echo "Not Logged In!";
	exit;
}

// include_once the style variables file
if(isset($manager_theme) && !isset($_style)) {
	$_style = array();
	include_once "media/style/".$manager_theme."/style.php";
}

// check if user is allowed to access manager interface
if(isset($allow_manager_access) && $allow_manager_access==0 && !(isset($_GET['a']) && $_GET['a'] == 8)) {
	include_once "manager.lockout.inc.php";
}

// Initialize System Alert Message Queque
if (!isset($_SESSION['SystemAlertMsgQueque'])) $_SESSION['SystemAlertMsgQueque'] = array();
$SystemAlertMsgQueque = &$_SESSION['SystemAlertMsgQueque'];

// first we check to see if this is a frameset request
if(!isset($_POST['a']) && !isset($_GET['a']) && !isset($_POST['updateMsgCount'])) {
	// this looks to be a top-level frameset request, so let's serve up a frameset
	if(is_file(MODX_MANAGER_PATH."media/style/".$manager_theme."/frames/1.php")) {
		include_once "media/style/".$manager_theme."/frames/1.php";
	}else{
		include_once "frames/1.php";
	}
	exit;
}

// OK, let's retrieve the action directive from the request
$option = array('min_range'=>1,'max_range'=>2000);
if(isset($_GET['a']) && isset($_POST['a'])) $modx->webAlertAndQuit($_lang['error_double_action']);
elseif(isset($_GET['a']))  $action = filter_input(INPUT_GET, 'a',FILTER_VALIDATE_INT,$option);
elseif(isset($_POST['a'])) $action = filter_input(INPUT_POST,'a',FILTER_VALIDATE_INT,$option);
else                       $action = null;

if (isset($_POST['updateMsgCount']) && $modx->hasPermission('messages')) {
	include_once 'messageCount.inc.php';
}

// save page to manager object
$modx->manager->action = $action;

// attempt to foil some simple types of CSRF attacks
if (isset($modx->config['validate_referer']) && (int)$modx->config['validate_referer']) {
	if (isset($_SERVER['HTTP_REFERER'])) {
		$referer = $_SERVER['HTTP_REFERER'];

		if (!empty($referer)) {
			if (!preg_match('/^'.preg_quote(MODX_SITE_URL, '/').'/i', $referer)) {
				$modx->webAlertAndQuit("A possible CSRF attempt was detected from referer: {$referer}.", "index.php");
			}
		} else {
				$modx->webAlertAndQuit("A possible CSRF attempt was detected. No referer was provided by the client.", "index.php");
		}
	} else {
		$modx->webAlertAndQuit("A possible CSRF attempt was detected. No referer was provided by the server.", "index.php");
	}
}

// invoke OnManagerPageInit event
$modx->invokeEvent("OnManagerPageInit", array("action" => $action));

// return element filepath
function includeFileProcessor ($filepath,$manager_theme) {
	$element = "";
	if(is_file(MODX_MANAGER_PATH."media/style/".$manager_theme."/".$filepath)) {
		$element = MODX_MANAGER_PATH."media/style/".$manager_theme."/".$filepath;
	}else{
		$element = $filepath;
	}
	return $element;
}

// Now we decide what to do according to the action request. This is a BIG list :)
switch ($action) {
/********************************************************************/
/* frame management - show the requested frame                      */
/********************************************************************/
	case 1 :
		// get the requested frame
		$frame = preg_replace('/[^a-z0-9]/i','',$_REQUEST['f']);
		if($frame>9) {
			$enable_debug=false;    // this is to stop the debug thingy being attached to the framesets
		}
		include_once(includeFileProcessor("frames/".$frame.".php",$manager_theme));
	break;
/********************************************************************/
/* show the homepage                                                */
/********************************************************************/
	case 2:
		// get the home page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/welcome.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* document data                                                    */
/********************************************************************/
	case 3:
		// get the page to show document's data
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/document_data.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* content management                                               */
/********************************************************************/
	case 85:
		// get the mutate page for adding a folder
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_content.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 27:
		// get the mutate page for changing content
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_content.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 4:
		// get the mutate page for adding content
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_content.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 5:
		// get the save processor
		include_once(includeFileProcessor("processors/save_content.processor.php",$manager_theme));
	break;
	case 6:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_content.processor.php",$manager_theme));
	break;
	case 63:
		// get the undelete processor
		include_once(includeFileProcessor("processors/undelete_content.processor.php",$manager_theme));
	break;
	case 51:
		// get the move action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/move_document.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 52:
		// get the move document processor
		include_once(includeFileProcessor("processors/move_document.processor.php",$manager_theme));
	break;
	case 61:
		// get the processor for publishing content
		include_once(includeFileProcessor("processors/publish_content.processor.php",$manager_theme));
	break;
	case 62:
		// get the processor for publishing content
		include_once(includeFileProcessor("processors/unpublish_content.processor.php",$manager_theme));
	break;
	case 56:
		// get the sort menuindex action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_menuindex_sort.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
		break;
/********************************************************************/
/* show the wait page - gives the tree time to refresh (hopefully)  */
/********************************************************************/
	case 7:
		// get the wait page (so the tree can reload)
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/wait.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* let the user log out                                             */
/********************************************************************/
	case 8:
		// get the logout processor
		include_once(includeFileProcessor("processors/logout.processor.php",$manager_theme));
	break;
/********************************************************************/
/* user management                                                  */
/********************************************************************/
	case 87:
		// get the new web user page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_web_user.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 88:
		// get the edit web user page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_web_user.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 89:
		// get the save web user processor
		include_once(includeFileProcessor("processors/save_web_user.processor.php",$manager_theme));
	break;
	case 90:
		// get the delete web user page
		include_once(includeFileProcessor("processors/delete_web_user.processor.php",$manager_theme));
	break;
	case 11:
		// get the new user page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_user.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 12:
		// get the edit user page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_user.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 32:
		// get the save user processor
		include_once(includeFileProcessor("processors/save_user.processor.php",$manager_theme));
	break;
	case 28:
		// get the change password page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_password.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 34:
		// get the save new password page
		include_once(includeFileProcessor("processors/save_password.processor.php",$manager_theme));
	break;
	case 33:
		// get the delete user page
		include_once(includeFileProcessor("processors/delete_user.processor.php",$manager_theme));
	break;
/********************************************************************/
/* role management                                                  */
/********************************************************************/
	case 38:
		// get the new role page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_role.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 35:
		// get the edit role page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_role.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 36:
		// get the save role page
		include_once(includeFileProcessor("processors/save_role.processor.php",$manager_theme));
	break;
	case 37:
		// get the delete role page
		include_once(includeFileProcessor("processors/delete_role.processor.php",$manager_theme));
	break;
/********************************************************************/
/* category management                                               */
/********************************************************************/
	case 120:
		// get the edit category page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_categories.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 121:
		// for ajax-requests
		include_once(includeFileProcessor("actions/mutate_categories.dynamic.php",$manager_theme));
	break;
/********************************************************************/
/* template management                                              */
/********************************************************************/
	case 16:
		// get the edit template action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_templates.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 19:
		// get the new template action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_templates.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 20:
		// get the save processor
		include_once(includeFileProcessor("processors/save_template.processor.php",$manager_theme));
	break;
	case 21:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_template.processor.php",$manager_theme));
	break;
	case 96:
		// get the duplicate template processor
		include_once(includeFileProcessor("processors/duplicate_template.processor.php",$manager_theme));
	break;
	case 117:
		// change the tv rank for selected template
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_template_tv_rank.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
		break;
/********************************************************************/
/* snippet management                                               */
/********************************************************************/
	case 22:
		// get the edit snippet action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_snippet.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 23:
		// get the new snippet action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_snippet.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 24:
		// get the save processor
		include_once(includeFileProcessor("processors/save_snippet.processor.php",$manager_theme));
	break;
	case 25:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_snippet.processor.php",$manager_theme));
	break;
	case 98:
		// get the duplicate processor
		include_once(includeFileProcessor("processors/duplicate_snippet.processor.php",$manager_theme));
	break;
/********************************************************************/
/* htmlsnippet management                                               */
/********************************************************************/
	case 78:
		// get the edit snippet action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_htmlsnippet.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 77:
		// get the new snippet action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_htmlsnippet.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 79:
		// get the save processor
		include_once(includeFileProcessor("processors/save_htmlsnippet.processor.php",$manager_theme));
	break;
	case 80:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_htmlsnippet.processor.php",$manager_theme));
	break;
	case 97:
		// get the duplicate processor
		include_once(includeFileProcessor("processors/duplicate_htmlsnippet.processor.php",$manager_theme));
	break;
/********************************************************************/
/* show the credits page                                            */
/********************************************************************/
	case 18:
		// get the credits page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/credits.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* empty cache & synchronisation                                    */
/********************************************************************/
	case 26:
		// get the cache emptying processor
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/refresh_site.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Module management                                                */
/********************************************************************/
	case 106:
		// get module management
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/modules.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 107:
		// get the new module action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_module.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 108:
		// get the edit module action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_module.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 109:
		// get the save processor
		include_once(includeFileProcessor("processors/save_module.processor.php",$manager_theme));
	break;
	case 110:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_module.processor.php",$manager_theme));
	break;
	case 111:
		// get the duplicate processor
		include_once(includeFileProcessor("processors/duplicate_module.processor.php",$manager_theme));
	break;
	case 112:
		// execute/run the module
		//include_once "header.inc.php";
		include_once(includeFileProcessor("processors/execute_module.processor.php",$manager_theme));
		//include_once "footer.inc.php";
		break;
	case 113:
		// get the module resources (dependencies) action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_module_resources.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* plugin management                                                */
/********************************************************************/
	case 100:
		// change the plugin priority
		//include_once "header.inc.php"; - in action file
		include_once(includeFileProcessor("actions/mutate_plugin_priority.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 101:
		// get the new plugin action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_plugin.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 102:
		// get the edit plugin action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_plugin.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 103:
		// get the save processor
		include_once(includeFileProcessor("processors/save_plugin.processor.php",$manager_theme));
	break;
	case 104:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_plugin.processor.php",$manager_theme));
	break;
	case 105:
		// get the duplicate processor
		include_once(includeFileProcessor("processors/duplicate_plugin.processor.php",$manager_theme));
	break;
	case 119:
		// get the purge processor
		include_once(includeFileProcessor("processors/purge_plugin.processor.php",$manager_theme));
	break;
/********************************************************************/
/* view phpinfo                                                     */
/********************************************************************/
	case 200:
		// show phpInfo
		if($modx->hasPermission('logs')) {
			include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
			include_once(includeFileProcessor("actions/phpinfo.static.php",$manager_theme));
			include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
		}
	break;
/********************************************************************/
/* errorpage                                            */
/********************************************************************/
	case 29:
		// get the error page
		include_once(includeFileProcessor("actions/error_dialog.static.php",$manager_theme));
	break;
/********************************************************************/
/* file manager                                                     */
/********************************************************************/
	case 31:
		// get the page to manage files
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/files.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* access permissions                                               */
/********************************************************************/
	case 40:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/access_permissions.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 91:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/web_access_permissions.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* access groups processor                                          */
/********************************************************************/
	case 41:
		include_once(includeFileProcessor("processors/access_groups.processor.php",$manager_theme));
	break;
	case 92:
		include_once(includeFileProcessor("processors/web_access_groups.processor.php",$manager_theme));
	break;
/********************************************************************/
/* settings editor                                                  */
/********************************************************************/
	case 17:
		// get the settings editor
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_settings.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 118:
		// call settings ajax include
		ob_clean();
		include_once(includeFileProcessor("includes/mutate_settings.ajax.php",$manager_theme));
	break;
/********************************************************************/
/* save settings                                                    */
/********************************************************************/
	case 30:
		// get the save settings processor
		include_once(includeFileProcessor("processors/save_settings.processor.php",$manager_theme));
	break;
/********************************************************************/
/* system information                                               */
/********************************************************************/
	case 53:
		// get the settings editor
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/sysinfo.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* optimise table                                               */
/********************************************************************/
	case 54:
		// get the table optimizer/truncate processor
		include_once(includeFileProcessor("processors/optimize_table.processor.php",$manager_theme));
	break;
/********************************************************************/
/* view logging                                                     */
/********************************************************************/
	case 13:
		// view logging
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/logging.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* empty logs                                                       */
/********************************************************************/
	case 55:
		// get the settings editor
		include_once(includeFileProcessor("processors/empty_table.processor.php",$manager_theme));
	break;
/********************************************************************/
/* calls test page                                                      */
/********************************************************************/
	case 999:
		// get the test page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("test_page.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Empty recycle bin                                                */
/********************************************************************/
	case 64:
		// get the Recycle bin emptier
		include_once(includeFileProcessor("processors/remove_content.processor.php",$manager_theme));
	break;
/********************************************************************/
/* Messages                                                     */
/********************************************************************/
	case 10:
		// get the messages page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/messages.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Delete a message                                                 */
/********************************************************************/
	case 65:
		// get the message deleter
		include_once(includeFileProcessor("processors/delete_message.processor.php",$manager_theme));
	break;
/********************************************************************/
/* Send a message                                                   */
/********************************************************************/
	case 66:
		// get the message deleter
		include_once(includeFileProcessor("processors/send_message.processor.php",$manager_theme));
	break;
/********************************************************************/
/* Remove locks                                                 */
/********************************************************************/
	case 67:
		// get the lock remover
		include_once(includeFileProcessor("processors/remove_locks.processor.php",$manager_theme));
	break;
/********************************************************************/
/* Site schedule                                                    */
/********************************************************************/
	case 70:
		// get the schedule page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/site_schedule.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Search                                                           */
/********************************************************************/
	case 71:
		// get the search page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/search.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* About                                                            */
/********************************************************************/
	case 59:
		// get the about page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/about.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Add weblink                                                          */
/********************************************************************/
	case 72:
		// get the weblink page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_content.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* User management                                                  */
/********************************************************************/
	case 75:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/user_management.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 99:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/web_user_management.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 86:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/role_management.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* template/ snippet management                                                 */
/********************************************************************/
	case 76:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/resources.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Export to file                                                   */
/********************************************************************/
	case 83:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/export_site.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Resource Selector                                                    */
/********************************************************************/
	case 84:
		include_once(includeFileProcessor("actions/resource_selector.static.php",$manager_theme));
	break;
/********************************************************************/
/* Backup Manager                                                   */
/********************************************************************/
	case 93:
		# header and footer will be handled interally
		include_once(includeFileProcessor("actions/bkmanager.static.php",$manager_theme));
	break;
/********************************************************************/
/* Duplicate Document                                                   */
/********************************************************************/
	case 94:
		// get the duplicate processor
		include_once(includeFileProcessor("processors/duplicate_content.processor.php",$manager_theme));
	break;
/********************************************************************/
/* Import Document from file                                        */
/********************************************************************/
	case 95:
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/import_site.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Help                                                             */
/********************************************************************/
	case 9:
		// get the help page
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/help.static.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Template Variables - Based on Apodigm's Docvars                  */
/********************************************************************/
	case 300:
		// get the new document variable action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_tmplvars.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 301:
		// get the edit document variable action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_tmplvars.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 302:
		// get the save processor
		include_once(includeFileProcessor("processors/save_tmplvars.processor.php",$manager_theme));
	break;
	case 303:
		// get the delete processor
		include_once(includeFileProcessor("processors/delete_tmplvars.processor.php",$manager_theme));
	break;
	case 304:
		// get the duplicate processor
		include_once(includeFileProcessor("processors/duplicate_tmplvars.processor.php",$manager_theme));
	break;
	case 305:
		// get the tv-rank action
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/mutate_tv_rank.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
/********************************************************************/
/* Event viewer: show event message log                             */
/********************************************************************/
	case 114:
		// get event logs
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/eventlog.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 115:
		// get event log details viewer
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		include_once(includeFileProcessor("actions/eventlog_details.dynamic.php",$manager_theme));
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
	break;
	case 116:
		// get the event log delete processor
		include_once(includeFileProcessor("processors/delete_eventlog.processor.php",$manager_theme));
	break;

	case 501:
		//delete category
		include_once(includeFileProcessor("processors/delete_category.processor.php",$manager_theme));
	break;
/********************************************************************/
/* default action: show not implemented message                     */
/********************************************************************/
	default :
		// say that what was requested doesn't do anything yet
		include_once(includeFileProcessor("includes/header.inc.php",$manager_theme));
		echo "
			<div class='sectionHeader'>".$_lang['functionnotimpl']."</div>
			<div class='sectionBody'>
				<p>".$_lang['functionnotimpl_message']."</p>
			</div>
		";
		include_once(includeFileProcessor("includes/footer.inc.php",$manager_theme));
}

/********************************************************************/
// log action, unless it's a frame request
if($action!=1 && $action!=7 && $action!=2) {
	include_once "log.class.inc.php";
	$log = new logHandler;
	$log->initAndWriteLog();
}
/********************************************************************/
// show debug
unset($_SESSION['itemname']); // clear this, because it's only set for logging purposes
include_once "debug.inc.php";
