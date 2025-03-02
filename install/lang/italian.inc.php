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
$_lang["agree_to_terms"] = 'Vi preghiamo di accettare le Condizioni di Licenza per procedere con l\'Installazione';
$_lang["alert_database_test_connection"] = 'Occorre creare il database o verificare la connessione ad un database esistente!';
$_lang["alert_database_test_connection_failed"] = 'La verifica della connessione al database ha avuto esito negativo!';
$_lang["alert_enter_adminconfirm"] = 'Controllare che la password di amministratore e la sua conferma coincidano!';
$_lang["alert_enter_adminlogin"] = 'Occorre inserire uno username da usare come amministratore di sistema!';
$_lang["alert_enter_adminpassword"] = 'Occorre inserire una password per l\'amministratore di sistema!';
$_lang["alert_enter_database_name"] = 'Inserite il nome del database!';
$_lang["alert_enter_host"] = 'Inserite il nome dell\'host su cui risiede database!';
$_lang["alert_enter_login"] = 'Inserite lo username per l\'accesso al database!';
$_lang["alert_server_test_connection"] = 'Verificate la connessione al database!';
$_lang["alert_server_test_connection_failed"] = 'La verifica della connessione al database ha avuto esito negativo!';
$_lang["alert_table_prefixes"] = 'Il prefisso per le tabelle deve iniziare con una lettera!';
$_lang["all"] = 'Tutti';
$_lang["and_try_again"] = ', e riprovate. Se vi occorre aiuto per risolvere il problema';
$_lang["and_try_again_plural"] = ', e riprovate. Se vi occorre aiuto per risolvere i problemi';
$_lang["begin"] = 'Inizio';
$_lang["btnback_value"] = 'Indietro';
$_lang["btnclose_value"] = 'Chiudi';
$_lang["btnnext_value"] = 'Avanti';
$_lang["cant_write_config_file"] = 'EVO non ha potuto salvare il file di configurazione. Vi preghiamo di copiare il seguente testo nel file ';
$_lang["cant_write_config_file_note"] = 'Una volta completata l\'operazione potrete accedere a EVO inserendo nel browser l\'indirizzo vostrosito.it/[+MGR_DIR+]/.';
$_lang["checkbox_select_options"] = 'Opzioni Checkbox:';
$_lang["checking_if_cache_exist"] = 'Verifico se esistono le directories <span class="mono">/assets/cache</span> e <span class="mono">/assets/cache/rss</span> : ';
$_lang["checking_iconv"] = 'Controllo se l\'estensione <span class="mono">iconv</span> &eacute; disponibile: ';
$_lang["checking_iconv_note"] = 'E\' importante installare/abilitare l\'estensione iconv. Contattate il vostro hosting provider se non sapete come fare.';
$_lang["checking_if_cache_file_writable"] = 'Controllo i permessi di scrittura sul file <span class="mono">/assets/cache/siteCache.idx.php</span> : ';
$_lang["checking_if_cache_file2_writable"] = 'Controllo i permessi di scrittura sul file <span class="mono">/assets/cache/sitePublishing.idx.php</span> : ';
$_lang["checking_if_cache_writable"] = 'Controllo i permessi di scrittura sulle directories <span class="mono">/assets/cache</span> e <span class="mono">/assets/cache/rss</span> : ';
$_lang["checking_if_config_exist_and_writable"] = 'Controllo l\'esistenza e i permessi di scrittura di <span class="mono">/[+MGR_DIR+]/includes/config.inc.php</span> : ';
$_lang["checking_if_export_exists"] = 'Controllo se esiste la directory <span class="mono">/assets/export</span> : ';
$_lang["checking_if_export_writable"] = 'Controllo i permessi di scrittura della directory <span class="mono">/assets/export</span> : ';
$_lang["checking_if_images_exist"] = 'Controllo se esistono le directories <span class="mono">/assets/images</span>, <span class="mono">/assets/files</span>,  <span class="mono">/assets/backup</span> and <span class="mono">/assets/.thumbs</span>: ';
$_lang["checking_if_images_writable"] = 'Controllo i permessi di scrittura delle directories <span class="mono">/assets/images</span>, <span class="mono">/assets/files</span>,  <span class="mono">/assets/backup</span> and <span class="mono">/assets/.thumbs</span> directories are writable: ';
$_lang["checking_mysql_strict_mode"] = 'Controllo la modalit&agrave; strict sql_mode di MySQL: ';
$_lang["checking_mysql_version"] = 'Controllo la versione di MySQL: ';
$_lang["checking_php_version"] = 'Controllo la versione di PHP: ';
$_lang["checking_registerglobals"] = 'Controllo se Register_Globals &eacute; disattivato: ';
$_lang["checking_registerglobals_note"] = 'Con questa configurazione il vostro sito potrebbe essere vittima di attacchi Cross Site Scripting (XSS). Per disabilitare Register_Globals ci sono diverse alternative: modificare il file php.ini globale, modificare il file .htaccess nella root della vostra installazione EVO, oppure aggiungere dei files php.ini in ogni directory della vostra installazione EVO (ma ci sono molte directories). Potete continuare con l\'installazione, ma non dite che non vi abbiamo avvertito.';
$_lang["checking_sessions"] = 'Controllo se le sessioni sono configurate correttamente: ';
$_lang["checking_table_prefix"] = 'Controllo il prefisso per le tabelle `';
$_lang["choose_language"] = 'Scegli la lingua';
$_lang["chunks"] = 'Chunks';
$_lang["config_permissions_note"] = 'Per nuove installazioni su Linux/Unix, vi preghiamo di creare un file vuoto <span class="mono">config.inc.php</span> nella directory <span class="mono">/[+MGR_DIR+]/includes/</span> con i permessi di scrittura a 0666.';
$_lang["connection_screen_collation"] = 'Collation:';
$_lang["connection_screen_connection_method"] = 'Tipo di connessione:';
$_lang["connection_screen_database_connection_information"] = 'Informazioni sul Database';
$_lang["connection_screen_database_connection_note"] = 'Inserite il nome del database da usare o che volete creare per questa installazione EVO. Se il database non esiste, il programma di installazione prover&agrave; a crearlo. Questa operazione potrebbe non riuscire in funzione della vostra configurazione di MySQL.';
$_lang["connection_screen_database_host"] = 'Server del Database:';
$_lang["connection_screen_database_info"] = 'Informazioni sul Database';
$_lang["connection_screen_database_login"] = 'Nome utente del Database:';
$_lang["connection_screen_database_name"] = 'Nome del Database:';
$_lang["connection_screen_database_pass"] = 'Password del Database:';
$_lang["connection_screen_database_test_connection"] = 'Crea un Database o verifica il Database selezionato.';
$_lang["connection_screen_default_admin_email"] = 'Indirizzo email dell\'Amministratore:';
$_lang["connection_screen_default_admin_login"] = 'Username dell\'Amministratore:';
$_lang["connection_screen_default_admin_note"] = 'Ora occorre inserire alcuni dettagli per l\'account dell\'Amministratore. Dovete inserire il vostro nome e scegliere una password. Una volta terminata l\'installazione questi dati vi serviranno per accedere al sistema.';
$_lang["connection_screen_default_admin_password"] = 'Password dell\'Amministratore:';
$_lang["connection_screen_default_admin_password_confirm"] = 'Confermare la password:';
$_lang["connection_screen_default_admin_user"] = 'Utente Admin di default';
$_lang["connection_screen_defaults"] = 'Impostazioni di default per il Manager';
$_lang["connection_screen_server_connection_information"] = 'Informazioni sulla connessione al server e l\'accesso';
$_lang["connection_screen_server_connection_note"] = 'Prima di verificare la connessione occorre indicare il server del Database (nome del server o indirizzo IP), username e password.';
$_lang["connection_screen_server_test_connection"] = 'Verifica del server del Database e delle collations.';
$_lang["connection_screen_table_prefix"] = 'Prefisso per la Tabella:';
$_lang["creating_database_connection"] = 'Creo la connessione al database: ';
$_lang["database_alerts"] = 'Avvisi e Errori del Database!';
$_lang["database_connection_failed"] = 'La connessione al Database &eacute; fallita!';
$_lang["database_connection_failed_note"] = 'Vi preghiamo di controllare i dettagli della connessione al database e riprovare.';
$_lang["database_use_failed"] = 'Impossibile selezionare il Database!';
$_lang["database_use_failed_note"] = 'Vi preghiamo di controllare i permessi dell\'utente specificato e riprovare.';
$_lang["default_language"] = 'Lingua di default per il Manager';
$_lang["default_language_description"] = 'Questa &eacute; la lingua che verr&agrave; usata nel Manager di EVO.';
$_lang["depedency_create"] = 'Dipendenza creata';
$_lang["depedency_update"] = 'Dipendenza aggiornata';
$_lang["during_execution_of_sql"] = ' durante l\'esecuzione del comando SQL ';
$_lang["encoding"] = 'iso-8859-1';
$_lang["error"] = 'errore';
$_lang["errors"] = 'errori';
$_lang["failed"] = 'FALLITA!';
$_lang["guid_set"] = 'GUID impostata';
$_lang["help"] = 'Aiuto!';
$_lang["help_link"] = 'https://forums.modx.com/';
$_lang["help_title"] = 'Assistenza per l\'installazione nei forums EVO';
$_lang["iagree_box"] = 'Accetto i termini della <a href="../assets/docs/license.txt" target="_blank">licenza EVO</a>. Per una traduzione della licenza GPL versione 2, vi preghiamo di visitare il sito <a href="http://www.gnu.org/licenses/old-licenses/gpl-2.0-translations.html" target="_blank">GNU</a>.';
$_lang["install"] = 'Installazione';
$_lang["install_overwrite"] = 'Installazione/Ripristino';
$_lang["install_results"] = 'Risultato dell\'Installazione';
$_lang["install_update"] = 'Installazione/Aggiornamento';
$_lang["installation_error_occured"] = 'Si sono verificati i seguenti errori durante l\'installazione';
$_lang["installation_install_new_copy"] = 'Installare una nuova copia di ';
$_lang["installation_install_new_note"] = 'Vi preghiamo di notare che questa opzione può sovrascrivere i dati preesistenti nel vostro database.';
$_lang["installation_mode"] = 'Modalit&agrave; di Installazione';
$_lang["installation_new_installation"] = 'Nuova Installazione';
$_lang["installation_note"] = '<strong>Nota:</strong> Dopo l\'accesso al Manager dovete modificare e salvare la Configurazione di Sistema selezionando <strong>Strumenti</strong> -> Configurazione di Sistema nel Manager EVO.';
$_lang["installation_successful"] = 'L\'Installazione &eacute; terminata con successo!';
$_lang["installation_upgrade_advanced"] = 'Aggiornamento Avanzato';
$_lang["installation_upgrade_advanced_note"] = 'Per amministratori di database esperti oppure quando &eacute; necessario migrare a database con un diverso set di caratteri.<br /><b>Vi occorre conoscere il nome del database, utente, password e i dettagli della connessione e collation utilizzate.</b>';
$_lang["installation_upgrade_existing"] = 'Aggiornamento di una installazione esistente';
$_lang["installation_upgrade_existing_note"] = 'Aggiornamento dei files esistenti e del database.';
$_lang["installed"] = 'Installato';
$_lang["installing_demo_site"] = 'Installazione del sito demo: ';
$_lang["language_code"] = 'en';
$_lang["loading"] = 'Sto caricando...';
$_lang["modules"] = 'Moduli';
$_lang["modx_footer1"] = '&copy; 2005-[+current_year+] <a href="http://modx.com/" target="_blank" style="color: green; text-decoration:underline">EVO</a> Content Management Framework (CMF) project.  Tutti i diritti riservati. EVO &eacute; sotto la licenza GNU GPL.';
$_lang["modx_footer2"] = 'EVO &eacute; un software libero. Vi incoraggiamo ad essere creativi e usare EVO come vi pare. Se fate delle modifiche al codice e decidete di ridistribuire il vostro EVO modificato, dovrete distribuire gratuitamente il codice sorgente!';
$_lang["modx_install"] = 'EVO &raquo; Installazione';
$_lang["modx_requires_php"] = ', e EVO richiede PHP [+min_version+] o successivo';
$_lang["mysql_5051"] = ' la versione di MySQL &eacute; 5.0.51!';
$_lang["mysql_5051_warning"] = 'Ci sono dei problemi noti con MySQL 5.0.51. Vi consigliamo di aggiornarlo prima di continuare.';
$_lang["mysql_version_is"] = ' La vostra versione di MySQL &eacute;: ';
$_lang["no"] = 'No';
$_lang["none"] = 'Nessuno';
$_lang["not_found"] = 'non trovato';
$_lang["ok"] = 'OK!';
$_lang["optional_items"] = 'Componenti Opzionali';
$_lang["optional_items_note"] = 'Vi preghiamo di scegliere le opzioni di installazione e fare click su Installazione:';
$_lang["php_security_notice"] = '<legend>Avviso di Sicurezza</legend><p>Anche se EVO funziona con la vostra versione di EVO, vi suggeriamo di non farlo. La vostra versione di EVO ha numerosi problemi di sicurezza. Un aggiornamento a PHP versione 5.6 o successiva corregger&agrave; questi problemi. Vi raccomandiamo di farlo per garantire la sicurezza del vostro sito web.</p>';
$_lang["please_correct_error"] = '. Vi preghiamo di correggere l\'errore';
$_lang["please_correct_errors"] = '. Vi preghiamo di correggere gli errori';
$_lang["plugins"] = 'Plugins';
$_lang["preinstall_validation"] = 'Verifica Pre-Installazione';
$_lang["recommend_collation"] = 'utf8_general_ci';
$_lang["recommend_collations_order"] = 'utf8mb4_unicode_ci,utf8mb4_general_ci,utf8_unicode_ci,utf8_general_ci,utf8mb4_bin,utf8_bin,utf8mb4_unicode_520_ci,utf8_unicode_520_ci,utf8_general_mysql500_ci';
$_lang["recommend_setting_change_title"] = 'Modifiche consigliate alla Configurazione';
$_lang["recommend_setting_change_validate_referer_confirmation"] = 'Modifica: <em>Validazione degli headers HTTP_REFERER?</em>';
$_lang["recommend_setting_change_validate_referer_description"] = 'Il vostro sito non &eacute; stato configurato per validare gli headers HTTP_REFERER degli accessi al Manager. Vi raccomandiamo di abilitare questa impostazione per ridurre il rischio di attacchi CSRF (Cross Site Request Forgery).';
$_lang["remove_install_folder_auto"] = 'Rimuovere la cartella install e i files in essa contenuti<br />&nbsp;(Questa operazione richiede i permessi di scrittura nella cartella di installazione).';
$_lang["remove_install_folder_manual"] = 'Ricordatevi di cancellare la cartella &quot;<b>install</b>&quot; prima di accedere a EVO.';
$_lang["resetting_database"] = 'Reset del database per il sito-demo:';
$_lang["retry"] = 'Riprova';
$_lang["running_database_updates"] = 'Esecuzione degli aggiornamenti del database: ';
$_lang["sample_web_site"] = 'Sito Web di Esempio';
$_lang["sample_web_site_note"] = 'Vi preghiamo di notare che questo <b>canceller&agrave;</b> i documenti e le risorse esistenti.';
$_lang["session_problem"] = 'E\' stato riscontrato un problema cone le sessioni del vostro server. Contattare un amministratore di sistema per risolvere il problema.';
$_lang["session_problem_try_again"] = 'Riprovare?';
$_lang["setup_cannot_continue"] = 'Sfortunatamente il programma di Installazione non può continuare, perch&eacute;; ';
$_lang["setup_couldnt_install"] = 'EVO non &eacute; riuscito ad installare/modificare alcune tabelle del database selezionato.';
$_lang["setup_database"] = 'EVO tenter&agrave; ora di configurare il database:<br />';
$_lang["setup_database_create_connection"] = 'Creazione della connessione con il database: ';
$_lang["setup_database_create_connection_failed"] = 'Impossibile connettersi con il Database!';
$_lang["setup_database_create_connection_failed_note"] = 'Vi preghiamo di controllare i dettagli della connessione al database e riprovare.';
$_lang["setup_database_creating_tables"] = 'Creazione delle tabelle del database: ';
$_lang["setup_database_creation"] = 'Creazione del database `';
$_lang["setup_database_creation_failed"] = 'Impossibile creare il Database!';
$_lang["setup_database_creation_failed_note"] = ' - EVO non &eacute; riuscito a creare il database!';
$_lang["setup_database_creation_failed_note2"] = 'EVO non &eacute; riuscito a creare il database e non &eacute; stato trovato un database con il nome specificato. Probabilmente il vostro hosting provider non consente a degli script esterni di creare un database. Vi preghiamo di creare manualmente un database ed eseguire nuovamente il programma di installazione.';
$_lang["setup_database_selection"] = 'Selezione del database `';
$_lang["setup_database_selection_failed"] = 'Impossibile selezionare il Database...';
$_lang["setup_database_selection_failed_note"] = 'Il database specificato non esiste. EVO prover&agrave; a crearlo.';
$_lang["snippets"] = 'Snippets';
$_lang["some_tables_not_updated"] = 'Alcune tabelle non sono state aggiornate, probabilmente a causa di precedenti modifiche.';
$_lang["status_checking_database"] = 'Verifica del database: ';
$_lang["status_connecting"] = ' Connessione al server: ';
$_lang["status_failed"] = 'fallita!';
$_lang["status_failed_could_not_create_database"] = 'fallita - impossibile creare il database';
$_lang["status_failed_database_collation_does_not_match"] = 'fallita - problemi con la collation del database; usate SET NAMES o scegliete %s';
$_lang["status_failed_table_prefix_already_in_use"] = 'fallita - il prefisso scelto per le tabelle &eacute; gi&agrave; in uso!';
$_lang['status_failed_mysqli'] = 'Errore - l\'estensione mysqli per PHP non è installata!';
$_lang["status_passed"] = 'successo - il database &eacute; stato selezionato';
$_lang["status_passed_database_created"] = 'successo - il database &eacute; stato creato';
$_lang["status_passed_server"] = 'successo - la collation del database &eacute; disponibile';
$_lang["strict_mode"] = ' Il server MySQL ha lo strict sql_mode abilitato!';
$_lang["strict_mode_error"] = 'Alcune funzionalit&agrave; di EVO potrebbero non funzionare se STRICT_TRANS_TABLES sql_mode &eacute; abilitato. Potete configurare MySQL dal file my.cnf o contattando un amministratore di sistema.';
$_lang["summary_setup_check"] = 'EVO ha effettuato dei controlli per verificare che tutto sia pronto per l\'installazione.';
$_lang["system_configuration"] = 'Configurazione di Sistema';
$_lang["system_configuration_validate_referer_description"] = 'L\'opzione di <strong>Validazione degli headers HTTP_REFERER</strong> &eacute; consigliata e vi può proteggere da attacchi CSRF, ma in qualche caso può impedire l\'accesso al Manager.';
$_lang["table_prefix_already_inuse"] = ' - Il prefisso selezionato per le Tabelle &eacute; gi&agrave; in uso in questo database!';
$_lang["table_prefix_already_inuse_note"] = 'EVO non ha potuto proseguire con l\'installazione nel database selezionato poich&eacute; contiene gi&agrave; delle tabelle con il prefisso indicato. Vi preghiamo di scegliere un nuovo prefisso per le tabelle ed eseguire nuovamente il programma di installazione.';
$_lang["table_prefix_not_exist"] = ' - Il prefisso selezionato per le tabelle non esiste in questo database!';
$_lang["table_prefix_not_exist_note"] = 'EVO non ha potuto proseguire con l\'installazione nel database selezionato poich&eacute; non contiene tabelle da aggiornare con il prefisso indicato. Vi preghiamo di scegliere un prefisso gi&agrave; esistente per le tabelle ed eseguire nuovamente il programma di installazione.';
$_lang["templates"] = 'Templates';
$_lang["to_log_into_content_manager"] = 'Per accedere al Manager ([+MGR_DIR+]/index.php) fate click sul bottone `Chiudi`.';
$_lang["toggle"] = 'Inverti';
$_lang['tvs'] = 'Variabili di Template';
$_lang["unable_install_chunk"] = 'Impossibile installare il Chunk.  File';
$_lang["unable_install_module"] = 'Impossibile installare il Modulo.  File';
$_lang["unable_install_plugin"] = 'Impossibile installare il Plugin.  File';
$_lang["unable_install_snippet"] = 'Impossibile installare lo Snippet.  File';
$_lang["unable_install_template"] = 'Impossibile installare il Template.  File';
$_lang["upgrade_note"] = '<strong>Nota:</strong> Vi preghiamo di accedere al Manager come Amministratore e verificare la Configurazione di Sistema.';
$_lang["upgraded"] = 'Aggiornato';
$_lang["validate_referer_title"] = 'Validazione degli headers HTTP_REFERER?';
$_lang["visit_forum"] = ', consultate i <a href="http://forums.modx.com/" target="_blank">Forums EVO</a>.';
$_lang["warning"] = 'ATTENZIONE!';
$_lang["welcome_message_start"] = 'Selezionate la modalit&agrave; di installazione:';
$_lang["welcome_message_text"] = 'Questo programma vi guider&agrave; attraverso il processo di Installazione.';
$_lang["welcome_message_welcome"] = 'Benvenuti nel programma di Installazione di EVO.';
$_lang["writing_config_file"] = 'Scrittura del file di configurazione: ';
$_lang["yes"] = 'Si';
$_lang["you_running_php"] = ' - State eseguendo PHP ';
?>