import { expect } from 'chai';
import quickSort from '../scripts/quickSort.js'
import genRandNumArray from '../scripts/genRandNumArray.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Quick sort with filter', () => {
  it('should be a function', () => {
    expect(quickSort).be.function;
  });

  it('should sort an number array', () => {
    var numbers = [5, 3, 2, 4, 1];
    var sorted = quickSort(numbers);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an alphanumeric array', () => {
    var stringArray = 'alphabet'.split('');

    expect(quickSort(stringArray)).to.deep.equal(
      ['a', 'a', 'b', 'e', 'h', 'l', 'p', 't']);
  });

  it('should sort a large number array', () => {
    var randomArray = genRandNumArray(150000);
    var compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(quickSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should sort a large alphanumeric array', () => {
    var stringArray = genRandChar(10000).split();
    var alphaSorted = Array.from(stringArray);

    alphaSorted = [...stringArray].sort((a, b) => a - b);
    expect(quickSort(stringArray)).to.deep.equal(alphaSorted.sort());
  });

  it('should reject a non-array', () => {
    var theString = 'alphabet';

    expect(quickSort(theString)).to.equal('This is not an array!');
  });

});
