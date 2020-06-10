const rootReducer = (state, action) => {

  

  switch(action.type) {
    case "ADD_BOOK":
      let newBook = action.payload;
      return {...state, books: [...state.books, newBook]};

    default:
      return state
    }
    
    return state
  }
  
  export default rootReducer