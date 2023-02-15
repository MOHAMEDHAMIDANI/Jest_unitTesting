const myData = require("../all");
test("check if array contains 6 element", () => {
    expect(myData).toHaveLength(6);
});

test("check if string contains 6 char", () => {
    expect("mohame").toHaveLength(6);
});

test("check if array number 6", () => {
    expect(myData).toContain(6);
});

test("check if array not has the number 7", () => {
    expect(myData).not.toContain(7);
});

test("check if all my array element are nums ", () => {
    for (i = 0; i < myData.length; i++){
    expect(isNaN(myData[i])).not.toBeTruthy();
    }
});

test("check if my element is greater than 4", () => {
    expect(myData[5]).toBeGreaterThan(4);
});

// using my own matchers
test("check using my own matcher if num_1 > num_2", () => {
    expect(10).Greater(5);
});

test("check if my element is greater or equal to 5", () => {
    expect(myData[5]).toBeGreaterThanOrEqual(5);
});

test("string match", () => {
    let mystring = "mohamed hamidani cheith abdelmonsef";
    expect(mystring).toMatch(/cheith/);
});

test(" undefined", () => {
    let a = undefined;
    expect(a).toBeUndefined();
});

test("object ", () => {
    let myobject = {
        name: "mohamed ",
        age: 19,
        
    }
    expect(myobject).toHaveProperty("age");
});

test("object and value", () => {
    let myobject = {
        name: "mohamed ",
        age: 19,
    };
    expect(myobject).toHaveProperty("age", 19);
});

// to create my own matchers
expect.extend({
    Greater(received, target) {
        const pass = received > target
        if (pass) {
            return {
                message: () => `expected ${received} to be greater than ${target}`,
                pass : true
            }
        } else {
            return {
            message: () =>
                `error : expected ${received} to be greater than ${target}`,
            pass: false,
            };
        }
    }
})

// expect any thing but undefiend or null 
test(" expect anything ", () => {
    expect("mohamed").toEqual(expect.anything());
    expect(10).toEqual(expect.anything());
    expect([1,2,3,4,5,6]).toEqual(expect.anything());
});

// expect any constractor
test(" expect any constractor ", () => {
    expect("mohamed").toEqual(expect.any(String));
    expect(10).toEqual(expect.any(Number));
    expect([1, 2, 3, 4, 5, 6]).toEqual(expect.any(Array));
});

// arraycontaining
test(" expect array containing ", () => {
    expect([1, 2, 3, 4, 5, 6]).toEqual(expect.arrayContaining([1,6]));
});

//test uncoverage : npm test -- --coverage