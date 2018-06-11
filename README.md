## String Calculator

Based on the famous [String Calculator Kata](http://osherove.com/tdd-kata-1/) popularized by Roy Osherove.

This is an exercise suitable for gaining familiarity with Test Driven Development (TDD), as well as a quick interview exercise.

The goal of this Kata is to create an `add()` function that takes a variable number of strings, converts them to integers, and returns their sum.

In order to achieve this goal we will use the principles of TDD to incrementally develop a fully tested `add()` function. Please read each requirement below (without reading ahead), and for each requirement:

1. Create a failing test describing the feature.
2. Extend the application to make the feature pass.
3. Refactor the code into a more structured and extensible version.

### Setup

Use Node 8.

Run `npm i` to install all dependencies.

Use `npm run start` to run the application.

Use `npm run test` to run the tests.

Refer to the [Mocha](https://mochajs.org/#getting-started) and [Chai](http://www.chaijs.com/api/bdd/) documentation for guidance on tests.

### Steps

1. The `StringCalculator` class's `add()` method should return `0` when called without any arguments.

```
StringCalculator.add() --> 0
```

2. `add(str)` should return `str`'s contents as an integer.

```
StringCalculator.add('12') --> 12
StringCalculator.add('5') --> 5
```

3. `add(a, b)` should return the sum of `a` and `b` when parsed as integers.

```
StringCalculator.add('7', '4') --> 11
StringCalculator.add('1', '9') --> 10
```

4. `add(n1, n2, n3, ...ni)` should return the sum of all `n1, n2, ..., ni` when parsed as integers.

```
StringCalculator.add('1', '3', 5', '2') --> 11
```

Notes: The string arguments should be parsed using the provided `IntegerParser.parse(String number)` function.
