import { Book } from "./interfaces";
import { Category } from "./enums";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): ReadonlyArray<Book> {
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

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];

    return [title, author];
}

export function logFirstAvailable(
    books: ReadonlyArray<any> = getAllBooks()
): void {
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

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === "function") {
        return (book[prop] as Function).name;
    }

    return book[prop];
}

export function getBookTitlesByCategory(
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

export function logBookTitles(titles: Array<string>): void {
    for (const title of titles) {
        console.log(title);
    }
}

export function createCustomerId(name: string, id: number): string {
    return `${name}${id}`;
}

export function createCusomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function checkoutBooks(
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

export function getTitles(author: string): Array<string>;
export function getTitles(avaible: boolean): Array<string>;
export function getTitles(id: number, available: boolean): Array<string>;
export function getTitles(
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

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("value should have been string");
    }
}

export function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join("");
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

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
