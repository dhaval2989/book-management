import { Book } from '../models/Book';
// Simulate the database for book storage.
export let books: Book[] = [
  { id: '1', title: '1984', author: 'George Orwell', price: 9.99, stock: 10 },
  { id: '2', title: 'Brave New World', author: 'Aldous Huxley', price: 12.50, stock: 7 }
];

export const findBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};
