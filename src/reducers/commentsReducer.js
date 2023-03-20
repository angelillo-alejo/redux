// commentsReducer: gestiona los comentarios de los posts 
// commentsReducer.js: contendrá la lista de comentarios en un array vacío y el estado de la carga y errores. 
//Al igual que los anteriores contemplaremos las acciones más adelante:

import * as actions from "../actions/commentsActions";

export const initialState = {
  comments: [],
  loading: false,
  errors: false,
};

// La lógica es exactamente igual que postsReducer, seteando los valores de state y loading según la acción y 
// almacenando los comentarios obtenidos en la variable comments.
export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, loading: true };
    case actions.GET_COMMENTS_OK:
      return { ...state, comments: action.payload, loading: false, errors: false};
    case actions.GET_COMMENTS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}

