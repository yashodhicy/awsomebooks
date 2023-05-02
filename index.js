import Book from './modules/book.js';
import Navigation from './modules/navigation.js';
import dom from './modules/Domelements.js';
import updateCurrentDate from './modules/date.js';

document.addEventListener('DOMContentLoaded', () => Book.displayBooks());

const form = document.querySelector('#bookForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  Book.addBookToList(book);
  Book.addBook(book);
});

document.querySelector('#bookOfList').addEventListener('click', (e) => {
  Book.deleteBook(e.target);
  Book.removeBook(e.target.previousElementSibling.textContent);
});

updateCurrentDate();
//  navigation

const domElements = dom();
Navigation(domElements);
