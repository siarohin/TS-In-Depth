import { Librarian } from "../interfaces";
import {
    sealed,
    logger,
    writable,
    logMethod,
    logParameter,
    format
} from "../decorators";

@logger
@sealed("UniversityLibrarian")
class UniversityLibrarian implements Librarian {
    @format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log(`Assisting faculty`);
    }

    @writable(false)
    teachCommunity(): void {
        console.log(`Teaching community`);
    }
}

export { UniversityLibrarian };
