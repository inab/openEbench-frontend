import { ScientificModule } from "./scientific.module";

describe("ScientificModule", () => {
    let scientificModule: ScientificModule;

    beforeEach(() => {
        scientificModule = new ScientificModule();
    });

    it("should create an instance", () => {
        expect(scientificModule).toBeTruthy();
    });
});
