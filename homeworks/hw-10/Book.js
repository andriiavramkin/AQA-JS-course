export default class Book {
  constructor(title, author, year) {
    this._title = title
    this._author = author
    this._year = year
  }

  // task3 getter-setter
  get title() {
    return this._title
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("Error: Book's title should be in string type")
    }

    if (value.length < 3) {
      throw new Error(" Title length should be at least 3 characters")
    }

    this._title = value
  }

  get author() {
    return this._author
  }

  set author(value) {
    if (typeof value === "string") {
      throw new Error("Error: Author's name should be in string type")
    }

    if (value.length < 1) {
      throw new Error(" Author's name should be at least 1 character")
    }

    this._author = value
  }

  get year() {
    return this._year
  }

  set year(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Error: Publishing year should be in number type")
    }

    if (value.toString().length !== 4) {
      throw new Error("Publishing year should be strictly 4 digits")
    }

    this._year = value
  }

  //task4
  static findOldestBook(books) {
    let oldestBook = books[0]

    for (let i = 1; i < books.length; i++) {
      if (books[i].year < oldestBook.year) {
        oldestBook = books[i]
      }
    }
    return oldestBook
  }

  printInfo() {
    console.log(`Your book is ${this.title} written by ${this.author} at ${this.year}.`)
  }
}
