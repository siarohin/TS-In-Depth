showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

/**
 * Task 02.01
 */
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

function getAllBooks(): Array<any> {
    const books: Array<any> = [
        {
            title: "Refactoring JavaScript",
            author: "Evan Burchard",
            available: true,
            category: Category.JavaScript
        },
        {
            title: "JavaScript Testing",
            author: "Liang Yuxian Eugene",
            available: false,
            category: Category.JavaScript
        },
        {
            title: "CSS Secrets",
            author: "Lea Verou",
            available: true,
            category: Category.CSS
        },
        {
            title: "Mastering JavaScript Object-Oriented Programming",
            author: "Andrea Chiarelli",
            available: true,
            category: Category.JavaScript
        }
    ];

    return books;
}

function logFirstAvailable(books: Array<any>): void {
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

function getBookTitlesByCategory(category: Category): Array<string> {
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

function calcTotalPages(): bigint {
    const data = [
        { lib: "libName1", books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: "libName2", books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: "libName3", books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const result = data.reduce((acc: bigint, item: any) => {
        return acc + BigInt(item.books) * BigInt(item.avgPagesPerBook);
    }, 0n);

    return result;
}

console.log(calcTotalPages());
