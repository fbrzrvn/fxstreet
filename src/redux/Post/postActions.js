import * as API from '../../api';
import * as PostTypes from './postTypes';

export const fetchPostRequest = () => ({ type: PostTypes.FETCH_POST_REQUEST });

export const fetchPostError = (error) => ({
  type: PostTypes.FETCH_POST_ERROR,
  payload: error,
});

export const fetchPostSuccess = (posts) => ({
  type: PostTypes.FETCH_POST_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostRequest());
  try {
    const { data } = await API.fetchPost();
    dispatch(fetchPostSuccess(data));
  } catch (error) {
    dispatch(fetchPostError(error.message));
  }
};
