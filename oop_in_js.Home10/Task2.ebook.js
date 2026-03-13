import Book from './Task1.book.js';

class EBook extends Book {
	constructor(name, author, year, fileFormat) {
		super(name, author, year);
		this._fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}
	set fileFormat(fileFormat) {
		this._fileFormat = fileFormat;
	}

	printInfo() {
		super.printInfo();
		return `${this.name} (author: ${this.author}, year: ${this.year}, fileFormat: ${this.fileFormat})`;
	}

	static fromEbook(book, fileFormat) {
		return new EBook(book.name, book.author, book.year, fileFormat);
	}
}

export default EBook;