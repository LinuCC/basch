import App from './ServerApp'
import ReactOnRails from 'react-on-rails'
import i18n from 'i18n-js'

// Manually load the translations because the server does not have window
global.I18n = i18n
require('imports?I18n=>global.I18n!exports?I18n!./../../../assets/javascripts/i18n/de-server.js')

i18n.defaultLocale = 'de'
i18n.locale = 'de'

ReactOnRails.register(
  {
    App,
    // RouterApp,
  }
);
