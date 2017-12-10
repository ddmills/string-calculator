import IntegerParser from './IntegerParser';

export default class StringCalculator {
  static add(...numbers) {
    return numbers.reduce((sum, number) => sum + IntegerParser.parse(number), 0);
  }
}
