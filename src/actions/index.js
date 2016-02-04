export function selectBook(book)  {
  //selectBook is an ActionCrator, it needs to return an action,
  //an object with a type property. Type is always uppercase
  return {
    type: "BOOK_SELECTED",
    payload: book
  }
}
