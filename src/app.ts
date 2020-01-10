/** Interfaces */

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

interface DamageLogger {
    (p: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

type BookProperties = keyof Book;

function getAllBooks(): ReadonlyArray<Book> {
    const books: ReadonlyArray<Book> = <const>[
        {
            id: 1,
            title: "Refactoring JavaScript",
            author: "Evan Burchard",
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: "JavaScript Testing",
            author: "Liang Yuxian Eugene",
            available: false,
            category: Category.JavaScript
        },
        {
            id: 3,
            title: "CSS Secrets",
            author: "Lea Verou",
            available: true,
            category: Category.CSS
        },
        {
            id: 4,
            title: "Mastering JavaScript Object-Oriented Programming",
            author: "Andrea Chiarelli",
            available: true,
            category: Category.JavaScript
        }
    ];

    return books;
}

function logFirstAvailable(books: ReadonlyArray<any> = getAllBooks()): void {
    const numOfBooks: number = books.length;
    let title: string = "";

    for (const book of books) {
        if (book.available) {
            title = book.title;
            break;
        }
    }

    console.log(`Total number of books: ${numOfBooks}`);
    console.log(`First avaible book: ${title}`);
}

function getBookTitlesByCategory(
    category: Category = Category.JavaScript
): Array<string> {
    console.log(`Getting books in category ${Category[category]}`);

    const books = getAllBooks();
    const titles: Array<string> = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

function logBookTitles(titles: Array<string>): void {
    for (const title of titles) {
        console.log(title);
    }
}

logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];

    return [title, author];
}

const titleAndAutor = getBookAuthorByIndex(2);
console.log(titleAndAutor);

// function calcTotalPages(): bigint {
//     const data = <const>[
//         { lib: "libName1", books: 1_000_000_000, avgPagesPerBook: 250 },
//         { lib: "libName2", books: 5_000_000_000, avgPagesPerBook: 300 },
//         { lib: "libName3", books: 3_000_000_000, avgPagesPerBook: 280 }
//     ];

//     const result = data.reduce((acc: bigint, item: any) => {
//         return acc + BigInt(item.books) * BigInt(item.avgPagesPerBook);
//     }, 0n);

//     return result;
// }

// console.log(calcTotalPages());

titles.forEach((title: string) => console.log(title));

function getBookById(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

console.log(getBookById(1));

function createCustomerId(name: string, id: number): string {
    return `${name}${id}`;
}

const myId: string = createCustomerId("Ann", 10);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}${id}`;
idGenerator = createCustomerId;
console.log(idGenerator("Boris", 2));

function createCusomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

createCusomer("Ann");
createCusomer("Ann", 20);
createCusomer("Ann", 20, "Kyiv");

const titlesByCategory = getBookTitlesByCategory();
console.log(titlesByCategory);

logFirstAvailable();

function checkoutBooks(
    customer: string,
    ...booksIds: Array<number>
): Array<string> {
    console.log(`Customer name: ${customer}`);

    const titles: Array<string> = [];
    for (const id of booksIds) {
        const book = getBookById(id);

        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}

const myBooks: Array<string> = checkoutBooks("Ann", 1, 2, 4);
console.log(myBooks);

function getTitles(author: string): Array<string>;
function getTitles(avaible: boolean): Array<string>;
function getTitles(id: number, available: boolean): Array<string>;
function getTitles(
    ...args: [string | boolean | number, boolean?]
): Array<string> {
    const books = getAllBooks();

    if (!args.length) {
        return [];
    } else if (args.length === 1) {
        const arg = args[0];
        if (typeof arg === "string") {
            return books
                .filter(book => book.author === arg)
                .map(book => book.title);
        } else if (typeof arg === "boolean") {
            return books
                .filter(book => book.available === arg)
                .map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === "number" && typeof available === "boolean") {
            return books
                .filter(book => book.id === id && book.available === available)
                .map(book => book.title);
        }
    }
}

const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("value should have been string");
    }
}

function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join("");
}

console.log(bookTitleTransform("10"));
// console.log(bookTitleTransform(10));

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

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
const logDamage: DamageLogger = f;

logDamage(`missing back cover`);

const favoriteAuthor: Author = {
    name: "Anna",
    email: "anna@gmail.com",
    numBooksPublished: 4
};

const favoriteLibrarian: Librarian = {
    name: "Boris",
    email: "boris@gmail.com",
    department: "Classics",
    assistCustomer(name: string) {
        console.log(`Assist ${name}`);
    }
};

const offer: any = {
    book: {
        title: "Essential TypeScript"
    }
};

console.log(offer?.magazine);

function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === "function") {
        return (book[prop] as Function).name;
    }

    return book[prop];
}

console.log(getBookProp(getAllBooks()[0], "title"));
console.log(getBookProp(getAllBooks()[0], "markDamaged"));

/** Classes */

class ReferenceItem {
    private _publisher: string;
    static department: string = "Research Dep";

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number) {
        console.log(`Creating a new ReferenceItem`);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}

const ref: ReferenceItem = new ReferenceItem("Our new title", 2020);
ref.printItem();
ref.publisher = "Random Publisher";
console.log(ref.publisher);

class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
}

const refBook: Encyclopedia = new Encyclopedia("Title", 2020, 3);
refBook.printItem();
