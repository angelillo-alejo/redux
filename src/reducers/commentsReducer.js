import * as actions from "../actions/commentsActions";

export const initialState = {
  comments: [],
  loading: false,
  errors: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, loading: true };
    case actions.GET_COMMENTS_OK:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        errors: false,
      };
    case actions.GET_COMMENTS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}