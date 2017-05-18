import { expect } from 'chai';
import quickSort from '../scripts/quickSort.js'
import genRandNumArray from '../scripts/genRandNumArray.js'
import genRandCharString from '../scripts/genRandCharString.js'

describe('Quick sort with filter', () => {
  it('should be a function', () => {
    expect(quickSort).be.function;
  });

  it('should sort an number array', () => {
    var numbers = [5, 3, 2, 4, 1];
    var sorted = quickSort(numbers);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort a large number array', () => {
    var randomArray = genRandNumArray(100000);
    var compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(quickSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should reject a string', () => {
    var theString = 'alphabet';

    expect(quickSort(theString).to.equal('This is not an array, fool!'));
  });

  it.skip('should sort a large alphanumeric string', () => {
    var alphaString = genRandCharString(10);
    var alphaSorted = alphaString.slice(0, -1);

    alphaSorted = [...alphaString].sort((a, b) => a - b);
    expect(quickSort(alphaString)).to.deep.equal(alphaSorted.sort());
  });

});
