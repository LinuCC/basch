I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"attributes":{"bs/grade":{"active_users":"Schüler in Klasse","attendance":{"one":"Schüler","other":"Schüler"},"level":"Stufe","name":"Name"},"bs/kuwasys/course":{"description":"Beschreibung","end_date":"Endet","event_status":"Status","event_statuses":{"archived":"Archiviert","closed":"Geschlossen","open":"Offen"},"name":"Name","start_date":"Beginnt"},"bs/semester":{"end_date":"Endet am","name":"Name","start_date":"Beginnt am","status":"Status","statuses":{"active":"Aktiv","archived":"Archiviert"}},"bs/user":{"birth_date":"Geburtstag","email":"Emailadresse","name":"Name","password":"Passwort","password_confirmation":"Passwort bestätigen","telephone":"Telefonnummer","username":"Benutzername"}},"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"many":"Cannot delete record because dependent %{record} exist","one":"Cannot delete record because a dependent %{record} exists"}}},"models":{"bs/grade":"Klasse","bs/kuwasys/course":"Kurs","bs/semester":"Semester","bs/user":"Benutzer"}},"backend":{"grades":{"grade_list":"Klassenliste"},"kuwasys":{"courses":{"courses_list":"Kursliste"}},"pages":{"grades":{"edit":{"title":"Klasse bearbeiten"},"new":{"title":"Neue Klasse erstellen"},"title":"Klassen"},"kuwasys":{"courses":{"edit":{"title":"Kurs bearbeiten"},"new":{"title":"Neuen Kurs erstellen"},"title":"Kurse"},"dashboard":{"title":"Kurswahlsystem"},"title":"Kurswahlsystem"},"semesters":{"new":{"title":"Neues Semester erstellen"},"title":"Semester"},"title":"Backend","users":{"new":{"title":"Neuen Benutzer erstellen"},"title":"Benutzer"}},"semesters":{"semester_list":"Semesterliste"},"users":{"user_list":"Benutzerliste"}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","confirmed_and_signed_in":"Vielen Dank für Deine Registrierung. Du bist jetzt angemeldet.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","invalid_token":"Der Anmelde-Token ist ungültig.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully."},"sessions":{"already_signed_out":"Signed out successfully.","signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","record_invalid":"Gültigkeitsprüfung ist fehlgeschlagen: %{errors}","restrict_dependent_destroy":{"many":"Datensatz kann nicht gelöscht werden, da abhängige %{record} existieren.","one":"Datensatz kann nicht gelöscht werden, da ein abhängiger %{record}-Datensatz existiert."},"taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"Bitte überprüfen Sie die folgenden Felder:","header":{"one":"Konnte %{model} nicht speichern: ein Fehler.","other":"Konnte %{model} nicht speichern: %{count} Fehler."}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"frontend":{"danger_zone":{"account_lock_explanation":"Wenn du deine Karte verloren hast oder glaubst, dass jemand deine\nZugangsdaten herausgefunden hat, kannst du hier deinen Account sperren,\ndamit Unbefugte nicht darauf zugreifen können.\n","title":"Gefahrenbereich"},"hello":"Wilkommen bei Basch, dem neuen, hilfreichen Verwaltungstool!.","logout":"Ausloggen","pages":{"backend":{"title":"Backend"},"settings":{"title":"Einstellungen"},"title":"Frontend"},"settings":{"change_email":"Emailadresse verändern","change_password":"Passwort verändern","lock_account":"Account sperren"}},"hello":"Hello world","helpers":{"cancel":"Abbrechen","done":{"create":"%{model} erstellt","destroy":"%{model} gelöscht","submit":"%{model} gespeichert","update":"%{model} aktualisiert"},"form_error":"Einige Felder wurden inkorrekt ausgefüllt.","label":{"filter":"Filter","sort":"Sortieren"},"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","delete":"%{model} löschen","destroy":"%{model} löschen","edit":"%{model} bearbeiten","new":"%{model} erstellen","submit":"Save %{model}","update":"Update %{model}"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"simple_form":{"error_notification":{"default_message":"Please review the problems below:"},"no":"No","required":{"mark":"*","text":"required"},"yes":"Yes"},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
