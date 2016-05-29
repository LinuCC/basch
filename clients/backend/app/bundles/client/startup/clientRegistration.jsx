// import App from './ClientApp';
// import RouterApp from './ClientRouterApp';
// import SimpleCommentScreen from '../components/SimpleCommentScreen/SimpleCommentScreen';
import UsersBySemesterList from '#/Grades/UsersBySemesterList/UsersBySemesterList'
import Notifier from 'libs/components/Notifier'
import ReactOnRails from 'react-on-rails'
import i18n from 'i18n-js'
import App from './ClientApp.jsx'

window.I18n = i18n

i18n.defaultLocale = 'de'
i18n.locale = 'de'

ReactOnRails.setOptions({
  // traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register(
  {
    UsersBySemesterList,
    Notifier,
    App,
    // RouterApp,
    // SimpleCommentScreen,
  }
);
