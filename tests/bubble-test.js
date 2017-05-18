import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort.js'
import genRandNumArray from '../scripts/genRandNumArray.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Bubble sort with filter', () => {
  it('should be a function', () => {
    expect(bubbleSort).be.function;
  });

  it('should sort an number array', () => {
    let numbers = [5, 3, 2, 4, 1];
    let sorted = bubbleSort(numbers);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort a large number array', () => {
    let randomArray = genRandNumArray(7000);
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  });

  it('should sort an alphanumeric string', () => {
    let theString = 'alphabet';
    let sorted = bubbleSort(theString);

    expect(sorted).to.deep.equal(['a', 'a', 'b', 'e', 'h', 'l', 'p', 't']);
  });

  it('should sort a large alphanumeric string', () => {
    let alphaString = genRandChar(100);
    let alphaSorted = alphaString.slice(0, -1);

    alphaSorted = [...alphaString].sort((a, b) => a - b);
    expect(bubbleSort(alphaString)).to.deep.equal(alphaSorted.sort());
  });

});
