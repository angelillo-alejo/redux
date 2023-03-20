export const GET_COMMENTS = "GET_COMMENTS ";
export const GET_COMMENTS_OK = "GET_COMMENTS_OK";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

export const actionGetComments = () => ({
  type: GET_COMMENTS,
});

export const actionGetCommentsOk = (comments) => ({
  type: GET_COMMENTS_OK,
  payload: comments,
});

export const actionGetCommentsError = () => ({
  type: GET_COMMENTS_ERROR,
});

export function getComments(postId) {
  return async (dispatch) => {
    dispatch(actionGetComments());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();

      dispatch(actionGetCommentsOk(data));
    } catch (error) {
      console.log(error);
      dispatch(actionGetCommentsError());
    }
  };
}