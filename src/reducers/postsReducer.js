// En esta ocasión vamos a crear un blog, por lo que necesitamos un reducer que nos gestione todos los posts, 
// al que vamos a llamar postsReducer.
//contemplará el estado de los errores y la carga

import * as actions from "../actions/postsActions";


//Objeto de estado inicial con el estado de los posts esperando a almacenarlos, uno de errores y otro si están cargados
export const initialState = {
  posts: [],
  errors: false,
  loading: false,
};


//Devuelve el objeto
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_OK:
      return { posts: action.payload, loading: false, errors: false };
    case actions.GET_POSTS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}