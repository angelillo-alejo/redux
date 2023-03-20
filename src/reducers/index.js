import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";


// Podemos agregar múltiples reducers y anidarlos en un único reducer denominado rootReducer. 
// Para combinarlos usaremos la función combineReducers tal y como veremos a continuación.
const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
});

export default rootReducer;