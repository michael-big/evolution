<?php
/**
 * EVO Installer language file
 *
 * @author davaeron
 * @version 1.5.0
 * @date 2018/02/23
 *
 * @language English
 * @package evo
 * @subpackage installer
 *
 * Please commit your language changes on Transifex (https://www.transifex.com/projects/p/modx-evolution/) or on GitHub (https://github.com/modxcms/evolution).
 */
$_lang["agree_to_terms"] = 'Agree to the License Terms and Install';
$_lang["alert_database_test_connection"] = 'You need to create your database or test the selection of your database!';
$_lang["alert_database_test_connection_failed"] = 'The test of your database selection has failed!';
$_lang["alert_enter_adminconfirm"] = 'The administrator password and the confirmation don\'t match!';
$_lang["alert_enter_adminlogin"] = 'You need to enter a username for the system admin account!';
$_lang["alert_enter_adminpassword"] = 'You need to enter a password for the system admin account!';
$_lang["alert_enter_database_name"] = 'You need to enter a value for database name!';
$_lang["alert_enter_host"] = 'You need to enter a value for database host!';
$_lang["alert_enter_login"] = 'You need to enter your database login name!';
$_lang["alert_server_test_connection"] = 'You need to test your server connection!';
$_lang["alert_server_test_connection_failed"] = 'The test of your server connection has failed!';
$_lang["alert_table_prefixes"] = 'Table prefixes must start with a letter!';
$_lang["all"] = 'All';
$_lang["and_try_again"] = ', and try again. If you need help figuring out how to fix the problem';
$_lang["and_try_again_plural"] = ', and try again. If you need help figuring out how to fix the problems';
$_lang["begin"] = 'Begin';
$_lang["btnback_value"] = 'Back';
$_lang["btnclose_value"] = 'Close';
$_lang["btnnext_value"] = 'Next';
$_lang["cant_write_config_file"] = 'EVO couldn\'t write the config file. Please copy the following into the file ';
$_lang["cant_write_config_file_note"] = 'Once that\'s been done, you can log into EVO Admin by pointing your browser at YourSiteName.com/[+MGR_DIR+]/.';
$_lang["checkbox_select_options"] = 'Checkbox select options:';
$_lang["checking_if_cache_exist"] = 'Checking if <span class="mono">/assets/cache</span> and <span class="mono">/assets/cache/rss</span> directories exist: ';
$_lang["checking_iconv"] = 'Checking if extension <span class="mono">iconv</span> is available: ';
$_lang["checking_iconv_note"] = 'It is important to install/enable extension iconv. Please speak to your host if you don´t know how to enable it.';
$_lang["checking_if_cache_file_writable"] = 'Checking if <span class="mono">/assets/cache/siteCache.idx.php</span> file is writable: ';
$_lang["checking_if_cache_file2_writable"] = 'Checking if <span class="mono">/assets/cache/sitePublishing.idx.php</span> file is writable: ';
$_lang["checking_if_cache_writable"] = 'Checking if <span class="mono">/assets/cache</span> and <span class="mono">/assets/cache/rss</span> directories are writable: ';
$_lang["checking_if_config_exist_and_writable"] = 'Checking if <span class="mono">/[+MGR_DIR+]/includes/config.inc.php</span> exists and is writable: ';
$_lang["checking_if_export_exists"] = 'Checking if <span class="mono">/assets/export</span> directory exists: ';
$_lang["checking_if_export_writable"] = 'Checking if <span class="mono">/assets/export</span> directory is writable: ';
$_lang["checking_if_images_exist"] = 'Checking if <span class="mono">/assets/images</span>, <span class="mono">/assets/files</span>,  <span class="mono">/assets/backup</span> and <span class="mono">/assets/.thumbs</span> directories exists: ';
$_lang["checking_if_images_writable"] = 'Checking if <span class="mono">/assets/images</span>, <span class="mono">/assets/files</span>,  <span class="mono">/assets/backup</span> and <span class="mono">/assets/.thumbs</span> directories are writable: ';
$_lang["checking_mysql_strict_mode"] = 'Checking MySQL for strict sql_mode: ';
$_lang["checking_mysql_version"] = 'Checking MySQL version: ';
$_lang["checking_php_version"] = 'Checking PHP version: ';
$_lang["checking_registerglobals"] = 'Checking if Register_Globals is off: ';
$_lang["checking_registerglobals_note"] = 'This configuration makes your site much more susceptible to Cross Site Scripting (XSS) attacks. You should speak to your host about disabling this setting, usually by one of three ways: modifying the global php.ini file, adding rules to a .htaccess file in the root of your EVO install, or adding custom php.ini override files in every directory on your install (and there\'s a lot of them). You will still be able to install EVO, but consider yourself warned.';
$_lang["checking_sessions"] = 'Checking if sessions are properly configured: ';
$_lang["checking_table_prefix"] = 'Checking table prefix `';
$_lang["choose_language"] = 'Choose language';
$_lang["chunks"] = 'Chunks';
$_lang["config_permissions_note"] = 'For new Linux/Unix installs, please create a blank file named <span class="mono">config.inc.php</span> in the <span class="mono">/[+MGR_DIR+]/includes/</span> directory with file permissions set to 0666.';
$_lang["connection_screen_collation"] = 'Collation:';
$_lang["connection_screen_connection_method"] = 'Connection method:';
$_lang["connection_screen_database_connection_information"] = 'Database information';
$_lang["connection_screen_database_connection_note"] = 'Enter the database name to use or which you wish to create for this EVO install. If no database exists, the installer will attempt to create one. This may fail depending on the MySQL user permissions.';
$_lang["connection_screen_database_host"] = 'Database host:';
$_lang["connection_screen_database_info"] = 'Database Information';
$_lang["connection_screen_database_login"] = 'Database login name:';
$_lang["connection_screen_database_name"] = 'Database name:';
$_lang["connection_screen_database_pass"] = 'Database password:';
$_lang["connection_screen_database_test_connection"] = 'Create or test selection of your database.';
$_lang["connection_screen_default_admin_email"] = 'Administrator email:';
$_lang["connection_screen_default_admin_login"] = 'Administrator username:';
$_lang["connection_screen_default_admin_note"] = 'Now you\'ll need to enter some details for the main administrator account. You can fill in your own name here, and a password you\'re not likely to forget. You\'ll need these to log into Admin once setup is complete.';
$_lang["connection_screen_default_admin_password"] = 'Administrator password:';
$_lang["connection_screen_default_admin_password_confirm"] = 'Confirm password:';
$_lang["connection_screen_default_admin_user"] = 'Default Admin User';
$_lang["connection_screen_defaults"] = 'Default Manager Settings';
$_lang["connection_screen_server_connection_information"] = 'Server connection and login information';
$_lang["connection_screen_server_connection_note"] = 'Enter the database host (server name or IP address), the username and password before testing the connection.';
$_lang["connection_screen_server_test_connection"] = 'Test database server connection and view collations.';
$_lang["connection_screen_table_prefix"] = 'Table prefix:';
$_lang["creating_database_connection"] = 'Creating connection to the database: ';
$_lang["database_alerts"] = 'Database Alerts!';
$_lang["database_connection_failed"] = 'Database connection failed!';
$_lang["database_connection_failed_note"] = 'Please check the database login details and try again.';
$_lang["database_use_failed"] = 'Database could not be selected!';
$_lang["database_use_failed_note"] = 'Please check the database permissions for the specified user and try again.';
$_lang["default_language"] = 'Default Manager Language';
$_lang["default_language_description"] = 'This is the default language that will be used in the EVO Manager back end control panel.';
$_lang["depedency_create"] = 'Depedency created';
$_lang["depedency_update"] = 'Depedency updated';
$_lang["during_execution_of_sql"] = ' during the execution of SQL statement ';
$_lang["encoding"] = 'iso-8859-1';
$_lang["error"] = 'error';
$_lang["errors"] = 'errors';
$_lang["failed"] = 'FAILED!';
$_lang["guid_set"] = 'GUID set';
$_lang["help"] = 'Help!';
$_lang["help_link"] = 'https://forum.evo-cms.com/';
$_lang["help_title"] = 'Installation assistance in the EVO forums';
$_lang["iagree_box"] = 'I agree to the terms of <a href="../assets/docs/license.txt" target="_blank">the EVO license</a>. For translations of the GPL version 2 license, please visit the <a href="http://www.gnu.org/licenses/old-licenses/gpl-2.0-translations.html" target="_blank">GNU Operating System website</a>.';
$_lang["install"] = 'Install';
$_lang["install_overwrite"] = 'Install/Overwrite';
$_lang["install_results"] = 'Install results';
$_lang["install_update"] = 'Install/Update';
$_lang["installation_error_occured"] = 'The following errors had occurred during installation';
$_lang["installation_install_new_copy"] = 'Install a new copy of ';
$_lang["installation_install_new_note"] = 'Please note this option may overwrite any data inside your database.';
$_lang["installation_mode"] = 'Installation Mode';
$_lang["installation_new_installation"] = 'New Installation';
$_lang["installation_note"] = '<strong>Note:</strong> After logging into the manager you should edit and save your System Configuration settings before browsing the site by choosing <strong>Tools</strong> -> System Configuration in the EVO Manager.';
$_lang["installation_successful"] = 'Installation was successful!';
$_lang["installation_upgrade_advanced"] = 'Advanced Upgrade';
$_lang["installation_upgrade_advanced_note"] = 'For advanced database admins or moving to servers with a different database connection character set.<br /><b>You will need to know your full database name, user, password and connection/collation details.</b>';
$_lang["installation_upgrade_existing"] = 'Upgrade Existing Install';
$_lang["installation_upgrade_existing_note"] = 'Upgrade your current files and database.';
$_lang["installed"] = 'Installed';
$_lang["installing_demo_site"] = 'Installing demo site: ';
$_lang["language_code"] = 'en';
$_lang["loading"] = 'Loading...';
$_lang["modules"] = 'Modules';
$_lang["modx_footer1"] = '&copy; 2005-[+current_year+] the <a href="https://evo-cms.com/" target="_blank" style="color: green; text-decoration:underline">EVO</a> Content Management Framework (CMF) project. All rights reserved. EVO is licensed under the GNU GPL.';
$_lang["modx_footer2"] = 'EVO is free software.  We encourage you to be creative and make use of EVO in any way you see fit. Just make sure that if you do make changes and decide to redistribute your modified EVO, that you keep the source code free!';
$_lang["modx_install"] = 'EVO &raquo; Install';
$_lang["modx_requires_php"] = ', and EVO requires PHP [+min_version+] or later';
$_lang["mysql_5051"] = ' MySQL server version is 5.0.51!';
$_lang["mysql_5051_warning"] = 'There are known issues with MySQL 5.0.51. It is recommended that you upgrade before continuing.';
$_lang["mysql_version_is"] = ' Your MySQL version is: ';
$_lang["no"] = 'No';
$_lang["none"] = 'None';
$_lang["not_found"] = 'not found';
$_lang["ok"] = 'OK!';
$_lang["optional_items"] = 'Optional Items';
$_lang["optional_items_note"] = 'Please choose your installation options and click Install:';
$_lang["php_security_notice"] = '<legend>Security notice</legend><p>While EVO will work on your PHP version, usage of EVO on this version is not recommended. Your version of PHP is vulnerable to numerous security holes. Please upgrade to PHP version is 5.6 or higher, which patches these holes. It is recommended you upgrade to this version for the security of your own website.</p>';
$_lang["please_correct_error"] = '. Please correct the error';
$_lang["please_correct_errors"] = '. Please correct the errors';
$_lang["plugins"] = 'Plugins';
$_lang["preinstall_validation"] = 'Pre-install validation';
$_lang["recommend_collation"] = 'utf8_general_ci';
$_lang["recommend_collations_order"] = 'utf8mb4_unicode_ci,utf8mb4_general_ci,utf8_unicode_ci,utf8_general_ci,utf8mb4_bin,utf8_bin,utf8mb4_unicode_520_ci,utf8_unicode_520_ci,utf8_general_mysql500_ci';
$_lang["recommend_setting_change_title"] = 'Recommended Setting Change';
$_lang["recommend_setting_change_validate_referer_confirmation"] = 'Setting change: <em>Validate HTTP_REFERER headers?</em>';
$_lang["recommend_setting_change_validate_referer_description"] = 'Your site is not configured to validate the HTTP_REFERER of incoming requests to the Manager. We strongly recommend enabling this setting to reduce the risk of a CSRF (Cross Site Request Forgery) attack.';
$_lang["remove_install_folder_auto"] = 'Remove the install folder and files from my website <br />&nbsp;(This operation requires delete permission to the granted to the install folder).';
$_lang["remove_install_folder_manual"] = 'Please remember to remove the &quot;<b>install</b>&quot; folder before you log into the Content Manager.';
$_lang["resetting_database"] = 'Resetting database for demo-site: ';
$_lang["retry"] = 'Retry';
$_lang["running_database_updates"] = 'Running database updates: ';
$_lang["sample_web_site"] = 'Sample Web Site';
$_lang["sample_web_site_note"] = 'Please note that this will <b>overwrite</b> existing documents and resources.';
$_lang["session_problem"] = 'A problem was detected with your server sessions. Please consult your server admin to correct this problem.';
$_lang["session_problem_try_again"] = 'Try again?';
$_lang["setup_cannot_continue"] = 'Unfortunately, Setup cannot continue at the moment, due to the above ';
$_lang["setup_couldnt_install"] = 'EVO setup couldn\'t install/alter some tables inside the selected database.';
$_lang["setup_database"] = 'Setup will now attempt to setup the database:<br />';
$_lang["setup_database_create_connection"] = 'Creating connection to the database: ';
$_lang["setup_database_create_connection_failed"] = 'Database connection failed!';
$_lang["setup_database_create_connection_failed_note"] = 'Please check the database login details and try again.';
$_lang["setup_database_creating_tables"] = 'Creating database tables: ';
$_lang["setup_database_creation"] = 'Creating database `';
$_lang["setup_database_creation_failed"] = 'Database creation failed!';
$_lang["setup_database_creation_failed_note"] = ' - Setup could not create the database!';
$_lang["setup_database_creation_failed_note2"] = 'Setup could not create the database, and no existing database with the same name was found. It is likely that your hosting provider\'s security does not allow external scripts to create a database. Please create a database according to your hosting provider\'s procedure, and run Setup again.';
$_lang["setup_database_selection"] = 'Selecting database `';
$_lang["setup_database_selection_failed"] = 'Database selection failed...';
$_lang["setup_database_selection_failed_note"] = 'The database does not exist. Setup will attempt to create it.';
$_lang["snippets"] = 'Snippets';
$_lang["some_tables_not_updated"] = 'Some tables were not updated. This might be due to previous modifications.';
$_lang["status_checking_database"] = 'Checking database: ';
$_lang["status_connecting"] = ' Connection to host: ';
$_lang["status_failed"] = 'failed!';
$_lang["status_failed_could_not_create_database"] = 'failed - could not create database';
$_lang["status_failed_database_collation_does_not_match"] = 'failed - database collation mismatch; use SET NAMES or choose %s';
$_lang["status_failed_table_prefix_already_in_use"] = 'failed - table prefix already in use!';
$_lang['status_failed_mysqli'] = 'error - mysqli extension for PHP is not installed!';
$_lang["status_passed"] = 'passed - database selected';
$_lang["status_passed_database_created"] = 'passed - database created';
$_lang["status_passed_server"] = 'passed - collations now available';
$_lang["strict_mode"] = ' MySQL server strict sql_mode is enabled!';
$_lang["strict_mode_error"] = 'Certain features of EVO may not work properly unless the STRICT_TRANS_TABLES sql_mode is disabled. You can set the MySQL mode by editing the my.cnf file or contact your server administrator.';
$_lang["summary_setup_check"] = 'Setup has carried out a number of checks to see if everything\'s ready to start the setup.';
$_lang["system_configuration"] = 'System Configuration';
$_lang["system_configuration_validate_referer_description"] = 'The <strong>Validate HTTP_REFERER headers</strong> setting is recommended and can protect your site from CSRF attacks, but in some server configurations, can make your manager inaccessible.';
$_lang["table_prefix_already_inuse"] = ' - Table prefix is already in use in this database!';
$_lang["table_prefix_already_inuse_note"] = 'Setup couldn\'t install into the selected database, as it already contains tables with the prefix you specified. Please choose a new table prefix, and run Setup again.';
$_lang["table_prefix_not_exist"] = ' - Table prefix does not exist in this database!';
$_lang["table_prefix_not_exist_note"] = 'Setup couldn\'t install into the selected database, as it does not contain existing tables with the prefix you specified to be upgraded. Please choose an existing table prefix, and run Setup again.';
$_lang["templates"] = 'Templates';
$_lang["to_log_into_content_manager"] = 'To log into the Content Manager ([+MGR_DIR+]/index.php) you can click on the `Close` button.';
$_lang["toggle"] = 'Toggle';
$_lang['tvs'] = 'Template Variables';
$_lang["unable_install_chunk"] = 'Unable to install chunk.  File';
$_lang["unable_install_module"] = 'Unable to install module.  File';
$_lang["unable_install_plugin"] = 'Unable to install plugin.  File';
$_lang["unable_install_snippet"] = 'Unable to install snippet.  File';
$_lang["unable_install_template"] = 'Unable to install template.  File';
$_lang["upgrade_note"] = '<strong>Note:</strong> Before browsing your site you should log into the manager with an administrative account, then review and save your System Configuration settings.';
$_lang["upgraded"] = 'Upgraded';
$_lang["validate_referer_title"] = 'Validate HTTP_REFERER headers?';
$_lang["visit_forum"] = ', visit the <a href="https://forum.evo-cms.com/" target="_blank">EVO Forums</a>.';
$_lang["warning"] = 'WARNING!';
$_lang["welcome_message_start"] = 'First, choose the type of installation to perform:';
$_lang["welcome_message_text"] = 'This program will guide you through the rest of the installation.';
$_lang["welcome_message_welcome"] = 'Welcome to the EVO installation program.';
$_lang["writing_config_file"] = 'Writing configuration file: ';
$_lang["yes"] = 'Yes';
$_lang["you_running_php"] = ' - You are running on PHP ';
?>
