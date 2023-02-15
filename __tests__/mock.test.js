const moker = require("../scripts/mock")
it("mock function", () => {
    const moker = jest.fn((name) => `hello ${name}`)
    expect(moker("mohamed")).toBe("hello mohamed");
    expect(moker("ayham")).toBe("hello ayham");
    expect(moker("nibel")).toBe("hello nibel");
    expect(moker("khalil")).toBe("hello khalil");
    expect(moker).toHaveBeenCalled();
    expect(moker).toHaveBeenCalledTimes(4);
    expect(moker).toHaveBeenCalledWith("khalil");
    expect(moker).toHaveBeenLastCalledWith("khalil");
})