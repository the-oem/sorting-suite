import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort.js';
import genRandNumArray from '../scripts/genRandNumArray.js';
import genRandChar from '../scripts/genRandChar.js';

describe('Bubble sort with filter', () => {
  it('should be a function', () => {
    expect(bubbleSort).be.function;
  });

  it('should sort an number array', () => {
    const numbers = [5, 3, 2, 4, 1];

    expect(bubbleSort(numbers)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort a large number array', () => {
    const randomArray = genRandNumArray(5000, 1, 10000);
    const compSorted = [...randomArray].sort((a, b) => a - b);

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should sort an alphanumeric string', () => {
    const theString = 'alphabet';

    expect(bubbleSort(theString)).to.deep.equal(
      ['a', 'a', 'b', 'e', 'h', 'l', 'p', 't']);
  });

  it('should sort a large alphanumeric string', () => {
    const alphaString = genRandChar(100);
    const alphaSorted = [...alphaString].sort((a, b) => a - b);

    expect(bubbleSort(alphaString)).to.deep.equal(alphaSorted.sort());
  });

});
