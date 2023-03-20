
// postsActions: en nuestro blog necesitamos obtener los posts desde una API, 
// la cual en este caso vamos a usar una que nos mockea una serie de posts, y 
// almacenarlos en el estado de los propios posts.

// Para obtener estos posts de forma asíncrona usaremos Redux Thunk, configurado 
// anteriormente en la store. Vamos a crear un archivo llamado postsActions.js 
// donde agregaremos las acciones referentes a los posts, ok y error.


// Los thunks son un enfoque estándar para escribir lógica asíncrona en aplicaciones 
// Redux y se usan comúnmente para obtener datos. Sin embargo, se pueden usar para 
// una variedad de tareas y pueden contener lógica tanto síncrona como asíncrona.

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_OK = 'GET_POSTS_OK';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';


//action creators  devolverán la acción con un tipo y un payload.
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

// función que englobe las acciones anteriores. Cuando invoquemos a esta función llamará a GET_POSTS 
// mediante el action creator para ejecutar la petición a la API
export function getPosts() {
  return async (dispatch) => {

    dispatch(actionGetPosts());
    //Para llamar a los action creators usaremos el método dispatch para actualizar el estado de Redux.
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