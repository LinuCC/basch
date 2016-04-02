// import App from './ClientApp';
// import RouterApp from './ClientRouterApp';
// import SimpleCommentScreen from '../components/SimpleCommentScreen/SimpleCommentScreen';
import UsersBySemesterList from '../components/Grades/UsersBySemesterList/UsersBySemesterList'
import ReactOnRails from 'react-on-rails';

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register(
  {
    UsersBySemesterList,
    // RouterApp,
    // SimpleCommentScreen,
  }
);
