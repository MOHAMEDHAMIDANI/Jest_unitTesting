const sum = require("../sum");
// test(name, fn, timeout);
// it(name, fn, timeout);
// describe("the secription of what we will do",() => {test(name, fn,timeout)}); its optionall thghou

describe("check the sum of total nums", () => {
    describe.only("check if there is no num or just one", () => {
    test.only("return the num", () => {
        expect(sum()).toBe(0);
    });
    test("return the num", () => {
        expect(sum(10)).toBe(10);
    });
    });
    it("return the sum of nums", () => {
    expect(sum(10, 20, 30, 40, 50)).toBe(150);
    });
});
