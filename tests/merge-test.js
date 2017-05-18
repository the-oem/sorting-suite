import { expect } from 'chai';
import mergeSort from '../scripts/mergeSort.js'
import genRandNum from '../scripts/genRandNum.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Merge sort with filter ', () => {

  it('should be a function', () => {
    expect(mergeSort).be.function;
  })

});
