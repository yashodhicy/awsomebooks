import Book from './modules/book.js'
import { Navigation } from './modules/navigation.js';
import { DateTime } from './node_modules/luxon';

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

// Get current date and display it in the footer
const options = {
    year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
};
const now = DateTime.now();
const currentTime = now.toLocaleString('en-US', options);
document.getElementById('date').innerHTML = currentTime;

//  navigation

Navigation();

