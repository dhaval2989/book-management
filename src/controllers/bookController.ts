import { Context } from 'koa';
import { books, findBookById } from '../utils/bookData';
import { Book } from '../models/Book';
import { v4 as uuidv4 } from 'uuid';
import { BookRequestBody } from '../interfaces/BookInterface';
//Implement CRUD operation for books.
export const getAllBooks = (ctx: Context) => {
  ctx.body = books;
};

export const getBookById = (ctx: Context) => {
  const book = findBookById(ctx.params.id);
  if (!book) {
    ctx.status = 404;
    ctx.body = { error: 'Book not found' };
    return;
  }
  ctx.body = book;
};

export const addBook = (ctx: Context) => {
  const { title, author, price, stock } = ctx.request.body as BookRequestBody;
  if (!title || !author || typeof price !== 'number' || typeof stock !== 'number') {
    ctx.status = 400;
    ctx.body = { error: 'Invalid book data' };
    return;
  }

  const newBook: Book = { id: uuidv4(), title, author, price, stock };
  books.push(newBook);
  ctx.status = 201;
  ctx.body = newBook;
};

export const deleteBook = (ctx: Context) => {
  const index = books.findIndex((b) => b.id === ctx.params.id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: 'Book not found' };
    return;
  }

  books.splice(index, 1);
  ctx.status = 204;
};
