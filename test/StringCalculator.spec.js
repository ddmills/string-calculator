import {expect} from 'chai';
import StringCalculator from '../src/StringCalculator';

describe('StringCalculator', () => {
  it('should fail', () => {
    expect.fail(0, 1, "This test always fails");
  });
});
