export default class StringCalculator {
  static add(...numbers) {
    return numbers.reduce((sum, number) => sum + parseInt(number), 0);
  }
}
