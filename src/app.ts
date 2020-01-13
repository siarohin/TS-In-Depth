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
    printBook
} from "./functions";
import { Category } from "./enums";
import { Book, Logger, Author, Librarian } from "./interfaces";
import { PersonBook } from "./types";
import { RefBook, UniversityLibrarian } from "./classes";

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);

const titleAndAutor = getBookAuthorByIndex(2);
console.log(titleAndAutor);

// console.log(calcTotalPages());

titles.forEach((title: string) => console.log(title));

console.log(getBookById(1));

const myId: string = createCustomerId("Ann", 10);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}${id}`;
idGenerator = createCustomerId;
console.log(idGenerator("Boris", 2));

createCusomer("Ann");
createCusomer("Ann", 20);
createCusomer("Ann", 20, "Kyiv");

const titlesByCategory = getBookTitlesByCategory();
console.log(titlesByCategory);

logFirstAvailable();

const myBooks: Array<string> = checkoutBooks("Ann", 1, 2, 4);
console.log(myBooks);

const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

console.log(bookTitleTransform("10"));
// console.log(bookTitleTransform(10));

const myBook: Book = {
    id: 5,
    title: "Colors, Backgrounds, and Gradients",
    author: "Eric A. Meyer",
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);
myBook.markDamaged(`missing back cover`);

const f = (damage: string) => console.log(`Damage reporter: ${damage}`);
const logDamage: Logger = f;

logDamage(`missing back cover`);

const favoriteAuthor: Author = {
    name: "Anna",
    email: "anna@gmail.com",
    numBooksPublished: 4
};

// const favoriteLibrarian: Librarian = {
//     name: "Boris",
//     email: "boris@gmail.com",
//     department: "Classics",
//     assistCustomer(name: string) {
//         console.log(`Assist ${name}`);
//     }
// };

const offer: any = {
    book: {
        title: "Essential TypeScript"
    }
};

console.log(offer?.magazine);

console.log(getBookProp(getAllBooks()[0], "title"));
console.log(getBookProp(getAllBooks()[0], "markDamaged"));

// const ref: ReferenceItem = new ReferenceItem("Our new title", 2020);
// ref.printItem();
// ref.publisher = "Random Publisher";
// console.log(ref.publisher);

const refBook: RefBook = new RefBook("Title", 2020, 3);
refBook.printItem();

refBook.printCitation();
console.log(refBook);

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Anna";
favoriteLibrarian.assistCustomer("Boris");

const personBook: PersonBook = {
    name: "Anna",
    email: "anna@gmail.com",
    title: "Introduction to Union Types",
    author: "Unknown",
    available: true,
    category: Category.TypeScript,
    id: 1
};
console.log(personBook);
