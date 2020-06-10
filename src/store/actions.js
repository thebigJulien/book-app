export const addNewBook = (title, author) => (
    {type: 'ADD_BOOK', payload: {title, author}}
)