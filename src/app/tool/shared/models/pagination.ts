export class Pagination {
    skip: number;
    limit: number;

    constructor(skip?: number, limit?: number) {
        this.limit = limit;
        this.skip = skip;
    }
}
