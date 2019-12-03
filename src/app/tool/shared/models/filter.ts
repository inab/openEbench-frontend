/**
 * Filter class
 */
export class Filter {
    text: string;

    constructor(text?: string) {
        this.text = text;
    }

    freeTextSearch(): void {
        console.log(this.text);
    }
}
