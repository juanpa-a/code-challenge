const fibonacci = require("../index");

test("Computes fibonacci set", () => {
    const result = fibonacci(0, 1);
    expect(result.splice(0, 50)).toEqual(fibonacciSet);
});

test(`call fibonacci function with a string`, () => {
    expect(() => fibonacci("not a number", 1)).toThrow(
        "Invalid numbers, please try again"
    );
});

test(`call fibonacci function with an object`, () => {
    expect(() => fibonacci(1, {})).toThrow("Invalid numbers, please try again");
});

const fibonacciSet = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
    514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352,
    24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437,
    701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049,
];
