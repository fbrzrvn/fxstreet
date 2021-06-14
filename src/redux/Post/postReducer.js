import * as PostTypes from './postTypes';

const postInitialState = {
  isLoading: false,
  error: null,
  posts: [],
};

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case PostTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PostTypes.FETCH_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case PostTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
