// Example of React + Redux
// import App from './ServerApp';
// import RouterApp from './ServerRouterApp';
import UsersBySemesterList from '../components/Grades/UsersBySemesterList/UsersBySemesterList'
import ReactOnRails from 'react-on-rails';
import i18n from 'i18n-js'

// Manually load the translations because the server does not have window
global.I18n = i18n
require('imports?I18n=>global.I18n!exports?I18n!./../../../assets/javascripts/i18n/de-server.js')

i18n.defaultLocale = 'de'
i18n.locale = 'de'


ReactOnRails.register(
  {
    UsersBySemesterList,
    // RouterApp,
  }
);
