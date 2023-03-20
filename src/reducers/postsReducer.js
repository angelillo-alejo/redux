// En esta ocasión vamos a crear un blog, por lo que necesitamos un reducer que nos gestione todos los posts, 
// al que vamos a llamar postsReducer.
//contemplará el estado de los errores y la carga


// importar las acciones en la parte superior de nuestro archivo postsReducer.js para su posterior uso
import * as actions from "../actions/postsActions";


//Objeto de estado inicial con el estado de los posts esperando a almacenarlos, uno de errores y otro si están cargados
export const initialState = {
  posts: [],
  errors: false,
  loading: false,
};


//Devuelve el objeto
// Una vez importadas vamos a agregar una sentencia case por cada acción en un switch 
// que nos devuelva el estado completo junto a los cambios efectuados.
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };//definiremos el valor de loading como true, indicando que se iniciará la llamada a la API:
    case actions.GET_POSTS_OK:
      return { posts: action.payload, loading: false, errors: false };// Seteamos el estado loading como false, ya que hemos obtenido los posts exitosamente, devolviendo la variable de estado posts. 
    case actions.GET_POSTS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}