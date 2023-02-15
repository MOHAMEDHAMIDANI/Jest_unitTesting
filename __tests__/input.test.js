const filter = require("../input");
describe("filter the name ", () => {
    it("there is name", () => {
        expect(filter("mohamed")).toBe("mohamed")
    });
    it("there is name", () => {
        expect(filter("_mohamed")).toBe("mohamed");
    });
    it.skip("there is name", () => {
        expect(filter(" mohamed ")).toBe("mohamed");
    });
});