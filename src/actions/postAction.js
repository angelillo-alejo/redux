// postActions: con esta acción vamos a obtener un post individual de la API, 
// almacenándolo en el estado que hemos generado.

export const GET_POST = "GET_POST";
export const GET_POST_OK = "GET_POST_OK";
export const GET_POST_ERROR = "GET_POST_ERROR";

export const actionGetPost = () => ({
  type: GET_POST,
});

export const actionGetPostOk = (post) => ({
  type: GET_POST_OK,
  payload: post,
});

export const actionGetPostError = () => ({
  type: GET_POST_ERROR,
});

export function getPost(postId) {
  return async (dispatch) => {
    dispatch(actionGetPost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();

      dispatch(actionGetPostOk(data));
    } catch (error) {
      console.log(error);
      dispatch(actionGetPostError());
    }
  };
}