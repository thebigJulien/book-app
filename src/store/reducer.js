const rootReducer = (state, action) => {

  switch(action.type) {

    case "FETCH_BOOKS":
      let booksApi = action.payload
      return {...state, books: booksApi}

    case "ADD_BOOK":
      let newBook = action.payload;

      let booksUpdated = [...state.books, newBook];
      let stateCopy = {...state, books: booksUpdated}
      return stateCopy;

    case "FILTER_BOOK":
      return {...state, filterBook: action.payload}

    default:
      return state
    
    }

  }
  
  export default rootReducer