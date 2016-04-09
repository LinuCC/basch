I18n.translations || (I18n.translations = {});
I18n.translations["de"] = I18n.extend((I18n.translations["de"] || {}), {"activerecord":{"attributes":{"bs/grade":{"active_users":"Schüler in Klasse","attendance":{"one":"Schüler","other":"Schüler"},"level":"Stufe","name":"Name"},"bs/kuwasys/course":{"description":"Beschreibung","end_date":"Endet","event_status":"Status","event_statuses":{"archived":"Archiviert","closed":"Geschlossen","open":"Offen"},"name":"Name","start_date":"Beginnt"},"bs/semester":{"end_date":"Endet am","name":"Name","start_date":"Beginnt am","status":"Status","statuses":{"active":"Aktiv","archived":"Archiviert"}},"bs/user":{"birth_date":"Geburtstag","email":"Emailadresse","name":"Name","password":"Passwort","password_confirmation":"Passwort bestätigen","telephone":"Telefonnummer","username":"Benutzername"}},"models":{"bs/grade":"Klasse","bs/kuwasys/course":"Kurs","bs/semester":"Semester","bs/user":"Benutzer"}},"backend":{"grades":{"grade_list":"Klassenliste"},"kuwasys":{"courses":{"courses_list":"Kursliste"}},"pages":{"grades":{"edit":{"title":"Klasse bearbeiten"},"new":{"title":"Neue Klasse erstellen"},"title":"Klassen"},"kuwasys":{"courses":{"edit":{"title":"Kurs bearbeiten"},"new":{"title":"Neuen Kurs erstellen"},"title":"Kurse"},"dashboard":{"title":"Kurswahlsystem"},"title":"Kurswahlsystem"},"semesters":{"new":{"title":"Neues Semester erstellen"},"title":"Semester"},"title":"Backend","users":{"new":{"title":"Neuen Benutzer erstellen"},"title":"Benutzer"}},"semesters":{"semester_list":"Semesterliste"},"users":{"user_list":"Benutzerliste"}},"date":{"abbr_day_names":["So","Mo","Di","Mi","Do","Fr","Sa"],"abbr_month_names":[null,"Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],"day_names":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"formats":{"default":"%d.%m.%Y","long":"%e. %B %Y","short":"%e. %b"},"month_names":[null,"Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"vor etwa einer Stunde","other":"vor etwa %{count} Stunden"},"about_x_months":{"one":"vor etwa einem Monat","other":"vor etwa %{count} Monaten"},"about_x_years":{"one":"vor etwa einem Jahr","other":"vor etwa %{count} Jahren"},"almost_x_years":{"one":"vor fast einem Jahr","other":"vor fast %{count} Jahren"},"half_a_minute":"vor einer halben Minute","less_than_x_minutes":{"one":"vor weniger als einer Minute","other":"vor weniger als %{count} Minuten"},"less_than_x_seconds":{"one":"vor weniger als eine Sekunde","other":"vor weniger als %{count} Sekunden"},"over_x_years":{"one":"vor mehr als einem Jahr","other":"vor mehr als %{count} Jahren"},"x_days":{"one":"vor einem Tag","other":"vor %{count} Tagen"},"x_minutes":{"one":"vor einer Minute","other":"vor %{count} Minuten"},"x_months":{"one":"vor einem Monat","other":"vor %{count} Monaten"},"x_seconds":{"one":"vor einer Sekunde","other":"vor %{count} Sekunden"}},"prompts":{"day":"Tag","hour":"Stunden","minute":"Minute","month":"Monat","second":"Sekunde","year":"Jahr"}},"devise":{"confirmations":{"confirmed":"Vielen Dank für Deine Registrierung. Bitte melde dich jetzt an.","confirmed_and_signed_in":"Vielen Dank für Deine Registrierung. Du bist jetzt angemeldet.","send_instructions":"Du erhältst in wenigen Minuten eine E-Mail, mit der Du Deine Registrierung bestätigen kannst.","send_paranoid_instructions":"Falls Deine E-Mail-Adresse in unserer Datenbank existiert erhältst Du in wenigen Minuten eine E-Mail mit der Du Deine Registrierung bestätigen kannst."},"failure":{"already_authenticated":"Du bist bereits angemeldet.","inactive":"Dein Account ist nicht aktiv.","invalid":"Ungültige Anmeldedaten.","invalid_token":"Der Anmelde-Token ist ungültig.","locked":"Dein Account ist gesperrt.","not_found_in_database":"E-Mail-Adresse oder Passwort ungültig.","timeout":"Deine Sitzung ist abgelaufen, bitte melde Dich erneut an.","unauthenticated":"Du musst Dich anmelden oder registrieren, bevor Du fortfahren kannst.","unconfirmed":"Du musst Deinen Account bestätigen, bevor Du fortfahren kannst."},"mailer":{"confirmation_instructions":{"subject":"Anleitung zur Bestätigung Deines Accounts"},"reset_password_instructions":{"subject":"Anleitung um Dein Passwort zurückzusetzen"},"unlock_instructions":{"subject":"Anleitung um Deinen Account freizuschalten"}},"omniauth_callbacks":{"failure":"Du konntest nicht Deinem %{kind}-Account angemeldet werden, weil '%{reason}'.","success":"Du hast Dich erfolgreich mit Deinem %{kind}-Account angemeldet."},"passwords":{"no_token":"Du kannst diese Seite nur von dem Link aus einer E-Mail zum Passwort-Zurücksetzen aufrufen. Wenn du einen solchen Link aufgerufen hast stelle bitte sicher, dass du die vollständige Adresse aufrufst.","send_instructions":"Du erhältst in wenigen Minuten eine E-Mail mit der Anleitung, wie Du Dein Passwort zurücksetzen kannst.","send_paranoid_instructions":"Falls Deine E-Mail-Adresse in unserer Datenbank existiert erhältst Du in wenigen Minuten eine E-Mail mit der Anleitung, wie Du Dein Passwort zurücksetzen können.","updated":"Dein Passwort wurde geändert. Du bist jetzt angemeldet.","updated_not_active":"Dein Passwort wurde geändert."},"registrations":{"destroyed":"Dein Account wurde gelöscht.","signed_up":"Du hast dich erfolgreich registriert.","signed_up_but_inactive":"Du hast dich erfolgreich registriert. Wir konnten Dich noch nicht anmelden, da Dein Account inaktiv ist.","signed_up_but_locked":"Du hast dich erfolgreich registriert. Wir konnten Dich noch nicht anmelden, da Dein Account gesperrt ist.","signed_up_but_unconfirmed":"Du hast Dich erfolgreich registriert. Wir konnten Dich noch nicht anmelden, da Dein Account noch nicht bestätigt ist. Du erhältst in Kürze eine E-Mail mit der Anleitung, wie Du Deinen Account freischalten kannst.","update_needs_confirmation":"Deine Daten wurden aktualisiert, aber Du musst Deine neue E-Mail-Adresse bestätigen. Du erhälsts in wenigen Minuten eine E-Mail, mit der Du die Änderung Deiner E-Mail-Adresse abschließen kannst.","updated":"Deine Daten wurden aktualisiert."},"sessions":{"signed_in":"Erfolgreich angemeldet.","signed_out":"Erfolgreich abgemeldet."},"unlocks":{"send_instructions":"Du erhältst in wenigen Minuten eine E-Mail mit der Anleitung, wie Du Deinen Account entsperren können.","send_paranoid_instructions":"Falls Deine E-Mail-Adresse in unserer Datenbank existiert erhältst Du in wenigen Minuten eine E-Mail mit der Anleitung, wie Du Deinen Account entsperren kannst.","unlocked":"Dein Account wurde entsperrt. Du bist jetzt angemeldet."}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"muss akzeptiert werden","already_confirmed":"wurde bereits bestätigt","blank":"muss ausgefüllt werden","confirmation":"stimmt nicht mit %{attribute} überein","confirmation_period_expired":"muss innerhalb %{period} bestätigt werden, bitte fordere einen neuen Link an","empty":"muss ausgefüllt werden","equal_to":"muss genau %{count} sein","even":"muss gerade sein","exclusion":"ist nicht verfügbar","expired":"ist abgelaufen, bitte neu anfordern","greater_than":"muss größer als %{count} sein","greater_than_or_equal_to":"muss größer oder gleich %{count} sein","inclusion":"ist kein gültiger Wert","invalid":"ist nicht gültig","less_than":"muss kleiner als %{count} sein","less_than_or_equal_to":"muss kleiner oder gleich %{count} sein","not_a_number":"ist keine Zahl","not_an_integer":"muss ganzzahlig sein","not_found":"nicht gefunden","not_locked":"ist nicht gesperrt","not_saved":{"one":"Konnte %{resource} nicht speichern: ein Fehler.","other":"Konnte %{resource} nicht speichern: %{count} Fehler."},"odd":"muss ungerade sein","other_than":"darf nicht gleich %{count} sein","present":"darf nicht ausgefüllt werden","record_invalid":"Gültigkeitsprüfung ist fehlgeschlagen: %{errors}","restrict_dependent_destroy":{"many":"Datensatz kann nicht gelöscht werden, da abhängige %{record} existieren.","one":"Datensatz kann nicht gelöscht werden, da ein abhängiger %{record}-Datensatz existiert."},"taken":"ist bereits vergeben","too_long":{"one":"ist zu lang (mehr als 1 Zeichen)","other":"ist zu lang (mehr als %{count} Zeichen)"},"too_short":{"one":"ist zu kurz (weniger als 1 Zeichen)","other":"ist zu kurz (weniger als %{count} Zeichen)"},"wrong_length":{"one":"hat die falsche Länge (muss genau 1 Zeichen haben)","other":"hat die falsche Länge (muss genau %{count} Zeichen haben)"}},"template":{"body":"Bitte überprüfen Sie die folgenden Felder:","header":{"one":"Konnte %{model} nicht speichern: ein Fehler.","other":"Konnte %{model} nicht speichern: %{count} Fehler."}}},"helpers":{"cancel":"Abbrechen","done":{"create":"%{model} erstellt","destroy":"%{model} gelöscht","submit":"%{model} gespeichert","update":"%{model} aktualisiert"},"form_error":"Einige Felder wurden inkorrekt ausgefüllt.","label":{"filter":"Filter","sort":"Sortieren"},"select":{"prompt":"Bitte wählen"},"submit":{"create":"%{model} erstellen","delete":"%{model} löschen","destroy":"%{model} löschen","edit":"%{model} bearbeiten","new":"%{model} erstellen","submit":"%{model} speichern","update":"%{model} aktualisieren"}},"number":{"currency":{"format":{"delimiter":".","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"€"}},"format":{"delimiter":".","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"one":"Milliarde","other":"Milliarden"},"million":"Millionen","quadrillion":{"one":"Billiarde","other":"Billiarden"},"thousand":"Tausend","trillion":"Billionen","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n %"}},"precision":{"format":{"delimiter":""}}},"support":{"array":{"last_word_connector":" und ","two_words_connector":" und ","words_connector":", "}},"time":{"am":"vormittags","formats":{"default":"%A, %d. %B %Y, %H:%M Uhr","long":"%A, %d. %B %Y, %H:%M Uhr","short":"%d. %B, %H:%M Uhr"},"pm":"nachmittags"},"views":{"pagination":{"first":"Erste","last":"Letzte","next":"\u003ci class='fa fa-fw fa-chevron-right'\u003e\u003c/i\u003e","previous":"\u003ci class='fa fa-fw fa-chevron-left'\u003e\u003c/i\u003e"}}});
