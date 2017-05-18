import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort.js'
import genRandNum from '../scripts/genRandNum.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Insertion sort with filter', () => {
  it('should be a function', () => {
    expect(insertionSort).be.function;
  });

  it('should sort a small number array', () => {
    var array = [4, -10, 3, 9, -1, 34, 17];

    expect(insertionSort(array)).to.deep.equal([-10, -1, 3, 4, 9, 17, 34]);
  });

  it('should sort a large number array', () => {
    var array = genRandNum(50000);
    var sortedArr = Array.from(array);

    sortedArr = [...array].sort((a, b) => a - b);
    expect(insertionSort(array)).to.deep.equal(sortedArr);
  });

  it('should sort a small alphanumeric array', () => {
    var array = ['x', 'Z', 'c', 'R', 'A', 'a'];

    expect(insertionSort(array)).to.deep.equal(['A', 'R', 'Z', 'a', 'c', 'x']);
  });

  it.skip('should sort a large alphanumeric array', () => {
    var array = genRandChar(100);
    var sortedArr = array.slice(0, -1);

    sortedArr = [...array].sort((a, b) => a - b);
    expect(insertionSort(array)).to.deep.equal(sortedArr.sort());
  });

});
