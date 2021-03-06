import {
    bookTitleTransform,
    createCustomerId,
    createCusomer,
    checkoutBooks,
    getAllBooks,
    getTitles,
    getBookById,
    getBookAuthorByIndex,
    getBookProp,
    getBookTitlesByCategory,
    logBookTitles,
    logFirstAvailable,
    printBook,
    purge,
    getBookByCategory,
    logCategorySearch,
    getBookByCategoryPromise,
    logSearchResults
} from "./functions";
import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import {
    PersonBook,
    BookRequiredFields,
    UpdatedBook,
    CreateCustomerFunctionType
} from "./types";
import { RefBook, UniversityLibrarian, Shelf } from "./classes";
import Encyclopedia from "./classes/encyclopedia";

// showHello("greeting", "TypeScript");

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// const titleAndAutor = getBookAuthorByIndex(2);
// console.log(titleAndAutor);

// // console.log(calcTotalPages());

// titles.forEach((title: string) => console.log(title));

// console.log(getBookById(1));

// const myId: string = createCustomerId("Ann", 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerId;
// console.log(idGenerator("Boris", 2));

// createCusomer("Ann");
// createCusomer("Ann", 20);
// createCusomer("Ann", 20, "Kyiv");

// const titlesByCategory = getBookTitlesByCategory();
// console.log(titlesByCategory);

// logFirstAvailable();

// const myBooks: Array<string> = checkoutBooks("Ann", 1, 2, 4);
// console.log(myBooks);

// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// console.log(bookTitleTransform("10"));
// // console.log(bookTitleTransform(10));

// const myBook: Book = {
//     id: 5,
//     title: "Colors, Backgrounds, and Gradients",
//     author: "Eric A. Meyer",
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);
// myBook.markDamaged(`missing back cover`);

// const f = (damage: string) => console.log(`Damage reporter: ${damage}`);
// const logDamage: Logger = f;

// logDamage(`missing back cover`);

// const favoriteAuthor: Author = {
//     name: "Anna",
//     email: "anna@gmail.com",
//     numBooksPublished: 4
// };

// // const favoriteLibrarian: Librarian = {
// //     name: "Boris",
// //     email: "boris@gmail.com",
// //     department: "Classics",
// //     assistCustomer(name: string) {
// //         console.log(`Assist ${name}`);
// //     }
// // };

// const offer: any = {
//     book: {
//         title: "Essential TypeScript"
//     }
// };

// console.log(offer?.magazine);

// console.log(getBookProp(getAllBooks()[0], "title"));
// console.log(getBookProp(getAllBooks()[0], "markDamaged"));

// // const ref: ReferenceItem = new ReferenceItem("Our new title", 2020);
// // ref.printItem();
// // ref.publisher = "Random Publisher";
// // console.log(ref.publisher);

// const refBook: RefBook = new RefBook("Title", 2020, 3);
// refBook.printItem();

// refBook.printCitation();
// console.log(refBook);

// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Anna";
// favoriteLibrarian.assistCustomer("Boris");

// const personBook: PersonBook = {
//     name: "Anna",
//     email: "anna@gmail.com",
//     title: "Introduction to Union Types",
//     author: "Unknown",
//     available: true,
//     category: Category.TypeScript,
//     id: 1
// };
// console.log(personBook);

// import("./classes").then(module => {
//     const reader = new module.Reader();
//     reader.name = "Ann";
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// });

// const inventory: Array<Book> = [
//     {
//         id: 10,
//         title: "The C Programming Language",
//         author: "K & R",
//         available: true,
//         category: Category.Software
//     },
//     {
//         id: 11,
//         title: "Code Complete",
//         author: "Steve McConnell",
//         available: true,
//         category: Category.Software
//     },
//     {
//         id: 12,
//         title: "8-Bit Graphics with Cobol",
//         author: "A. B.",
//         available: true,
//         category: Category.Software
//     },
//     {
//         id: 13,
//         title: "Cool autoexec.bat Scripts!",
//         author: "C. D.",
//         available: true,
//         category: Category.Software
//     }
// ];

// console.log(purge<Book>(inventory));
// console.log(
//     purge<number>([1, 2, 3, 4, 5])
// );

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));

// const book = bookShelf.getFirst();
// console.log(book);

// const magazines: Array<Magazine> = [
//     { title: "Programming Language Monthly", publisher: "Code Mags" },
//     { title: "Literary Fiction Quarterly", publisher: "College Press" },
//     { title: "Five Points", publisher: "GSU" }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// const mag = magazineShelf.getFirst();
// console.log(mag);

// magazineShelf.printTitles();
// const findedRes = magazineShelf.find("Five Points");
// console.log(findedRes);

// const bookRequred: BookRequiredFields = {
//     id: 1,
//     title: "Book Title",
//     author: "Anna",
//     available: false,
//     category: Category.Angular,
//     pages: 250,
//     markDamaged: null
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     title: "Book Title"
// };

// const params: Parameters<CreateCustomerFunctionType> = ["Anna"];
// createCusomer(...params);

// const obj = new UniversityLibrarian();
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = "Anna";
// (fLibrarian as any).printLibrarian();
// fLibrarian["printLibrarian"]();

// fLibrarian.assistFaculty = null;
// // fLibrarian.teachCommunity = null;

// const encyclopedia = new Encyclopedia("The Best Encyclopedia", 2020, 1);
// encyclopedia.printItem();

// const fLibrarianT = new UniversityLibrarian();
// fLibrarianT.name = "Anna";
// fLibrarianT.assistCustomer("Boris");

// const fLibrarianY = new UniversityLibrarian();
// fLibrarianY.name = "Anna";
// console.log(fLibrarianY.name);

// const encyclopedia2 = new Encyclopedia("The Best Encyclopedia", 2020, 1);
// encyclopedia2.copies = 10;
// console.log(encyclopedia2);

// console.log("Begin");
// getBookByCategory(Category.JavaScript, logCategorySearch);
// console.log("End");

// console.log("Begin");
// getBookByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(num => console.log(num))
//     .catch(err => console.log(err));
// console.log("End");

console.log("Begin");
logSearchResults(Category.JavaScript).catch(err => console.log(err));
console.log("End");
