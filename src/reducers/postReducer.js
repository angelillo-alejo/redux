//postReducer.js  contendrá el estado post con el post que seleccionemos de la lista completa,
//Gestiona los datos de los posts de manera individual 
//Al igual que postsReducer contemplará el estado de los errores y la carga


export const initialState = {
    post: {},
    errors: false,
    loading: true,
  };
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }