import { expect } from 'chai';
import mergeSort from '../scripts/mergeSort.js'
import genRandNumArray from '../scripts/genRandNumArray.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Merge sort with filter', () => {
  it('should be a function', () => {
    expect(mergeSort).be.function;
  });

  it('should sort an number array', () => {
    const numbers = [5, 3, 2, 4, 1];

    expect(mergeSort(numbers)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an alphanumeric array', () => {
    const stringArray = [...'alphabet'];

    expect(mergeSort(stringArray)).to.deep.equal(
      ['a', 'a', 'b', 'e', 'h', 'l', 'p', 't']);
  });

  it('should sort a large number array', () => {
    const randomArray = genRandNumArray(140000, 1, 10000);
    const compSorted = [...randomArray].sort((a, b) => a - b);

    expect(mergeSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should sort a large alphanumeric array', () => {
    const stringArray = genRandChar(10000).split();
    const alphaSorted = [...stringArray].sort((a, b) => a - b);

    expect(mergeSort(stringArray)).to.deep.equal(alphaSorted.sort());
  });

  it('should reject a non-array', () => {
    const theString = 'alphabet';

    expect(mergeSort(theString)).to.equal('This is not an array!');
  });

});
