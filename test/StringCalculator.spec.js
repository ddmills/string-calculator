import {expect} from 'chai';
import sinon from 'sinon';
import Chance from 'chance';
import StringCalculator from '../src/StringCalculator';
import IntegerParser from '../src/IntegerParser';

const sandbox = sinon.sandbox.create();
const chance = new Chance();

describe('StringCalculator', () => {
  afterEach(() => {
    sandbox.restore();
  });

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

  it('should use IntegerParser to parse the strings', () => {
    const given = `${chance.natural()}`;
    const parsed = chance.natural();

    sandbox.stub(IntegerParser, 'parse').returns(parsed);

    const result = StringCalculator.add(given);

    expect(IntegerParser.parse).to.have.callCount(1);
    expect(IntegerParser.parse).to.be.calledWith(given);
    expect(result).to.equal(parsed);
  });

  it('should use IntegerParser for all inputs', () => {
    sandbox.stub(IntegerParser, 'parse');
    const inputs = chance.n(() => `${chance.natural()}`, chance.d12());
    const parsedIntegers = inputs.map(() => chance.natural());

    let expected = 0;

    inputs.forEach((input, index) => {
      const parsed = parsedIntegers[index];

      IntegerParser.parse.withArgs(input).returns(parsed);
      expected += parsed;
    });

    const result = StringCalculator.add(...inputs);

    expect(IntegerParser.parse).to.have.callCount(inputs.length);
    inputs.forEach(input => expect(IntegerParser.parse).to.be.calledWith(input));
    expect(result).to.equal(expected);
  });
});
