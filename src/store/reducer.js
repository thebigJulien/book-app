const rootReducer = (state, action) => {

  

  switch(action.type) {
    case "ADD_BOOK":
      let newBook = action.payload;

      let booksUpdated = [...state.books, newBook];
      let stateCopy = {...state, books: booksUpdated}
      return stateCopy;

    default:
      return state
    }

  }
  
  export default rootReducer