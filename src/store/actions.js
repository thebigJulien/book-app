export const addNewBook = (title, author) => (
    {type: 'ADD_BOOK', payload: {title, author}}
)

export const filterBook = (author) => (
    {type: 'FILTER_BOOK', payload: author}
)