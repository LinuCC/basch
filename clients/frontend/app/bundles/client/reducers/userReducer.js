/* eslint new-cap: 0 */

import Immutable from 'immutable';

import * as actionTypes from '../constants/userActionTypes';

export const defaultState = Immutable.fromJS({
  user: {
    isLoggedIn: false,
    display_name: null,
  },
  csrfToken: null, // Not sure about that. Should maybe be more dynamically fetched
})

export default (state = defaultState, action = null) => {

  const {type, user, error} = action;

  switch(type) {
    case actionTypes.SUBMIT_LOG_IN_SUCCESS: {
      return state.merge({
        user: user
      })
    }
    default: {
      return state;
    }
  }
}

// export const defaultState = Immutable.fromJS({
//   $$comments: [],
//   fetchCommentError: null,
//   submitCommentError: null,
//   isFetching: false,
//   isSaving: false,
// });
// initialState
// export default function commentsReducer($$state = $$initialState, action = null) {
//   const { type, comment, comments, error } = action;
//
//   switch (type) {
//
//     case actionTypes.FETCH_COMMENTS_SUCCESS: {
//       return $$state.merge({
//         $$comments: comments,
//         fetchCommentError: null,
//         isFetching: false,
//       });
//     }
//
//     case actionTypes.FETCH_COMMENTS_FAILURE: {
//       return $$state.merge({
//         fetchCommentError: error,
//         isFetching: false,
//       });
//     }
//
//     case actionTypes.SUBMIT_COMMENT_SUCCESS: {
//       return $$state.withMutations(state => (
//         state
//           .updateIn(
//             ['$$comments'],
//             $$comments => $$comments.unshift(Immutable.fromJS(comment))
//           )
//           .merge({
//             submitCommentError: null,
//             isSaving: false,
//           })
//       ));
//     }
//
//     case actionTypes.SUBMIT_COMMENT_FAILURE: {
//       return $$state.merge({
//         submitCommentError: error,
//         isSaving: false,
//       });
//     }
//
//     case actionTypes.SET_IS_FETCHING: {
//       return $$state.merge({
//         isFetching: true,
//       });
//     }
//
//     case actionTypes.SET_IS_SAVING: {
//       return $$state.merge({
//         isSaving: true,
//       });
//     }
//
//     default: {
//       return $$state;
//     }
//   }
// }
