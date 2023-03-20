export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_OK = 'GET_POSTS_OK';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const actionGetPosts = () => ({
  type: GET_POSTS,
});
  
export const actionGetPostsOk = (posts) => ({
  type: GET_POSTS_OK,
  payload: posts,
});
  
export const actionGetPostsError = () => ({
  type: GET_POSTS_ERROR,
});


export function getPosts() {
  return async (dispatch) => {

    dispatch(actionGetPosts());
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
  
      dispatch(actionGetPostsOk(data));
    } catch (error) {
      console.log(error);
      dispatch(actionGetPostsError());
    }
  }
}