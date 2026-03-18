import Book from './Task1.book.js';
import EBook from './Task2.ebook.js';

const book1 = new Book('The Best', 'Gabriel García Márquez', '1998');
const book2 = new Book('I Feel Bad About My Neck', 'Nora Ephron', '2006');
const book3 = new Book('Gilead', 'Marilynne Robinson', '1903');
const book4 = new Book('Autumn', 'Ali Smith', '2016');
const book5 = new Book('Life After Life', 'Kate Atkinson', '1990');
const eBook1 = new EBook('Life After Life - 2', 'Kate Atkinson', '1999', 'PDF');
const eBook2 = new EBook('Life After Life - 3', 'Kate Atkinson', '2024', 'PDF');
const book1ToEbook = EBook.fromEbook(book1, 'txt');
const book2ToEbook = EBook.fromEbook(book2, 'txt');

const books = [book1, book2, book3, book4, book5, eBook1, eBook2, book1ToEbook, book2ToEbook];

console.log('-'.repeat(43), 'Your library', '-'.repeat(43));
console.log(book1.printInfo());
console.log(book2.printInfo());
console.log(book3.printInfo());
console.log(book4.printInfo());
console.log(book5.printInfo());
console.log(eBook1.printInfo());
console.log(eBook2.printInfo());
console.log(book1ToEbook.printInfo());
console.log(book2ToEbook.printInfo());
console.log('-'.repeat(100));
console.log(Book.oldestBook(books));