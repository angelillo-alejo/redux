//Gestiona los datos de un los posts de manera individual 


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