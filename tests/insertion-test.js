import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort.js'
import genRandNumArray from '../scripts/genRandNumArray.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Insertion sort with filter', () => {
  it('should be a function', () => {
    expect(insertionSort).be.function;
  });

  it('should sort an number array', () => {
    var numbers = [5, 3, 2, 4, 1];
    var sorted = insertionSort(numbers);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an alphanumeric array', () => {
    var stringArray = 'alphabet'.split('');

    expect(insertionSort(stringArray)).to.deep.equal(
      ['a', 'a', 'b', 'e', 'h', 'l', 'p', 't']);
  });

  it('should sort a large number array', () => {
    var randomArray = genRandNumArray(20000);
    var compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(insertionSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should sort a large alphanumeric array', () => {
    var stringArray = genRandChar(10000).split();
    var alphaSorted = Array.from(stringArray);

    alphaSorted = [...stringArray].sort((a, b) => a - b);
    expect(insertionSort(stringArray)).to.deep.equal(alphaSorted.sort());
  });

  it('should reject a non-array', () => {
    var theString = 'alphabet';

    expect(insertionSort(theString)).to.equal('This is not an array!');
  });

});
