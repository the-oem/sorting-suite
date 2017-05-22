import { expect } from 'chai';
import quickSort from '../scripts/quickSort.js'
import genRandNumArray from '../scripts/genRandNumArray.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Quick sort with filter', () => {
  it('should be a function', () => {
    expect(quickSort).be.function;
  });

  it('should sort an number array', () => {
    const numbers = [5, 3, 2, 4, 1];

    expect(quickSort(numbers)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an alphanumeric array', () => {
    const stringArray = [...'alphabet'];

    expect(quickSort(stringArray)).to.deep.equal(
      ['a', 'a', 'b', 'e', 'h', 'l', 'p', 't']);
  });

  it('should sort a large number array', () => {
    const randomArray = genRandNumArray(350000, 1, 10000);
    const compSorted = [...randomArray].sort((a, b) => a - b);

    expect(quickSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should sort a large alphanumeric array', () => {
    const stringArray = genRandChar(10000).split();
    const alphaSorted = [...stringArray].sort((a, b) => a - b);

    expect(quickSort(stringArray)).to.deep.equal(alphaSorted.sort());
  });

  it('should reject a non-array', () => {
    const theString = 'alphabet';

    expect(quickSort(theString)).to.equal('This is not an array!');
  });

});
