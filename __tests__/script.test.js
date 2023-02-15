const say = require("../script");
test("say jest message", () => {
    expect(say()).toBe("hello jest")
});