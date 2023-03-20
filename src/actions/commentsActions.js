//los archivos de las acciones en nuestra carpeta actions que hemos generado en el directorio src.


// commentsActions esta acción será también muy similar a las otras que hemos creado, 
// con la diferencia de que irá enfocada a obtener los comentarios  generados en cada uno de los
// posts en nuestro archivo `**commentsActions.js**`:

export const GET_COMMENTS = "GET_COMMENTS ";
export const GET_COMMENTS_OK = "GET_COMMENTS_OK";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

export const actionGetComments = () => ({

  //añadimos los action creators que devolverán la acción con un type y un payload.
  type: GET_COMMENTS,
});

export const actionGetCommentsOk = (comments) => ({
  type: GET_COMMENTS_OK,
  payload: comments,
});

export const actionGetCommentsError = () => ({
  type: GET_COMMENTS_ERROR,
});


// la función recibe el postId del post como argumento para individualizar la petición, 
// almacenando un solo post.

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