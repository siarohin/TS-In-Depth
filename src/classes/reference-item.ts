import { timeout } from "../decorators";

export abstract class ReferenceItem {
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

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}
