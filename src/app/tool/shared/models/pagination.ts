import { Tools } from "./tools";
import { Filter } from "./filter";

export class Pagination {
    skip: number;
    limit: number;

    constructor(skip?: number, limit?: number) {
        this.limit = limit;
        this.skip = skip;
    }

    getNumberOfTools() {}

    getTools(skip: number, limit: number, filter?: Filter): Tools[] {
        return;
    }
}
