import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/books"


export const fetchBooks = () => {
    return (dispatch) => {
        axios.get("/")
        .then(res => {
            let booksApi = res.data
            dispatch(receivedBooks(booksApi))

        })        
    }
}

export const postBook = (title, author) => {
    return (dispatch) => {
        axios.post("/", {title, author})
        .then(res => {
            let booksApi = res.data
            dispatch(addNewBook(booksApi))
        })
    } 
}

export const receivedBooks = (books) => (
    {type: 'FETCH_BOOKS', payload: books}
)


export const addNewBook = (books) => (
    {type: 'ADD_BOOK', payload: books}
)

export const filterBook = (author) => (
    {type: 'FILTER_BOOK', payload: author}
)

