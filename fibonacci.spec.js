const fibonacci = require('./fibonacci');

const expected_sets = [
  [],
  [ 0 ],
  [ 0, 1 ],
  [ 0, 1, 1 ],
  [ 0, 1, 1, 2 ],
  [ 0, 1, 1, 2, 3 ],
  [ 0, 1, 1, 2, 3, 5 ],
]

// Happy path :)
expected_sets.forEach((correct_set, amount_of_elements) => {
  test(`computes fibonacci set with ${amount_of_elements} elements`, () => {
    const result = fibonacci(amount_of_elements)
    expect(result).toEqual(correct_set);
  })
})

// Edge cases
test(`call fibonacci function with a string`, () => {
  expect(() => fibonacci("not a whole number")).toThrow();
})

test(`call fibonacci function with a negative number`, () => {
  expect(() => fibonacci(-1)).toThrow();
})

test(`call fibonacci function with a float`, () => {
  expect(() => fibonacci(3.1416)).toThrow();
})
