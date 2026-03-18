class Book{
    constructor(name, author, year){
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }

    set name(name) {
        this._name = name;
    }
    set author(author) {
        this._author = author;
    }
    set year(year) {
        this._year = year;
    }

   printInfo() {
     return `This ${this.name} book is released by ${this.author} in ${this.year}`
   }

   static oldestBook(books) {
		const book = books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
		return `The olderst book is ${book.name}, ${book.year} years`;
	}
}

export default Book;