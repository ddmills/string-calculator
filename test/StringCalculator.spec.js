import {expect} from 'chai';
import sinon from 'sinon';
import Chance from 'chance';
import StringCalculator from '../src/StringCalculator';

const chance = new Chance();

describe('StringCalculator', () => {
  it('should return zero when the input is empty', () => {
    expect(StringCalculator.add()).to.equal(0);
  });

  it('should convert a single input to an integer', () => {
    const expected = chance.natural();
    const given = `${expected}`;

    expect(StringCalculator.add(given)).to.equal(expected);
  });

  it('should return the sum of two inputs', () => {
    const lhs = chance.natural();
    const rhs = chance.natural();
    const givenLHS = `${lhs}`;
    const givenRHS = `${rhs}`;
    const expected = lhs + rhs;

    expect(StringCalculator.add(givenLHS, givenRHS)).to.equal(expected);
  });

  it('should return the sum of multiple inputs', () => {
    const numbers = chance.n(chance.natural, chance.d20());
    const inputs = numbers.map((number) => `${number}`);

    let expected = 0

    numbers.forEach((number) => expected += number);

    expect(StringCalculator.add(...inputs)).to.equal(expected);
  });
});
