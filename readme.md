## String Calculator

##### Goal: Create a calculator that takes a variable number of strings, converts them to integers, and returns the sum

1. Create a `StringCalculator` class with an `add()` method. The add method should return `0` when the input is empty

```
StringCalculator.add() --> 0
```

2. `add(number)` should return the number as an integer

```
StringCalculator.add('12') --> 12
```

3. `add(a, b)` should return the sum of the numbers

```
StringCalculator.add('7', '4') --> 11
```

4. `add(n1, n2, n3, ...ni)` should return the sum of the numbers

```
StringCalculator.add('1', '3', 5', '2') --> 11
```

5. Strings should be parsed by `IntegerParser.parse(String number)`
