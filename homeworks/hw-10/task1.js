import Book from "./Book.js"
import EBook from "./EBook.js"

//task 1
console.log("task 1")
// valid
const book1 = new Book("Harry Potter", "J.K.Rowling", 1994)
book1.printInfo()

const book2 = new Book("Lord of the Rings", "J.R.R.Tolkien", 1954)
book2.printInfo()

const book3 = new Book("The Hobbit", "J.R.R.Tolkien", 1937)
book3.printInfo()

console.log("-------------------------------------------")
console.log(" ")

//invalid
console.log("task 3")
const book4 = new Book(true, "J.K.Rowling - # ", 1994)
book4.printInfo()

const book5 = new Book("Lord of the Rings #", "J.R.R.Tolkien #", "peter")
book5.printInfo()

console.log("-------------------------------------------")
console.log(" ")

//task 2
console.log("task 2")
//valid
const eBook1 = new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "pdf")
eBook1.printInfo()

const eBook2 = new EBook("The Theory of (Not Quite) Everything", "Kara Gnodde", 2023, "mb2")
eBook2.printInfo()

console.log("-------------------------------------------")
console.log(" ")

//inValid
console.log("task 3")
const eBook3 = new EBook("The Great Gatsby #", "F. Scott Fitzgerald #", 1925, 45)
eBook3.printInfo()

const eBook4 = new EBook("The Theory of (Not Quite) Everything #", "Kara Gnodde #", 2023, "mb22334")
eBook4.printInfo()

console.log("-------------------------------------------")
console.log(" ")

//task 4
console.log("task 4")
const books = [book1, book2, book3, eBook1, eBook2]
console.log("The oldest book is ", Book.findOldestBook(books))

console.log("-------------------------------------------")
console.log(" ")

//task 5
console.log("task 5")
const eBook = EBook.fromBookAndFileFormat(book1, "pdf")
console.log("eBook:", eBook)

console.log("-------------------------------------------")
console.log(" ")
