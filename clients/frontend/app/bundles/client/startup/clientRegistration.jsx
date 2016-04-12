import App from './ClientApp';
// import SimpleCommentScreen from '../components/SimpleCommentScreen/SimpleCommentScreen';
import ReactOnRails from 'react-on-rails';
import i18n from 'i18n-js'

window.I18n = i18n

i18n.defaultLocale = 'de'
i18n.locale = 'de'

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register(
  {
    App,
    // SimpleCommentScreen,
  }
);
