import {expect} from 'chai';
import StringCalculator from '../src/StringCalculator';

// Refer to the Mocha documentation for the structure of the tests.
//    https://mochajs.org/#getting-started
// Refer to the Chai documentation for assertions using `expect`.
//    http://www.chaijs.com/api/bdd/

describe('StringCalculator', () => {
  it('should fail', () => {
    expect.fail(0, 1, "This test always fails");
  });
});
