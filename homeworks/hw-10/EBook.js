import Book from "./Book.js";

export default class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    // task3 getter-setter
    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat(value) {
        if (typeof value !== 'string') {
            throw new Error('File format should be in string type')
        } 
            
        if (value.length !== 3) {
            throw new Error('Invalid input. File format should be strictly 3 characters.')
        }

        this._fileFormat = value
    }

    //task5
    static fromBookAndFileFormat(book, fileFormat){
        return new EBook(book.title, book.author, book.year, fileFormat)
    }


    printInfo () {
        console.log(`Your eBook is ${this.title} written by ${this.author} at ${this.year}. It is in ${this.fileFormat} format.`)
    }

}