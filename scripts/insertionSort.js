// Pseudocode
//
// Step 1 − If this is the first value, it's assumed to already be sorted.
// Step 2 − Get the next element.
// Step 3 − Compare that element with all elements in the sorted sub-list
//          (left of the marker).
// Step 4 − Shift all the elements in the sorted sub-list (left of the marker)
//          that are greater than the value to be sorted.
// Step 5 − Insert the value at the marker location
// Step 6 − Repeat until the list is sorted

function insertionSort(array) {
  if (!(array instanceof Array)) {
    return 'This is not an array!';
  }

  for (let i = 0; i < array.length; i++) {
    let valToInsert = array[i];
    let marker = i;

    while (marker > 0 && array[marker - 1] > valToInsert) {
      [array[marker], array[marker - 1]] = [array[marker - 1], array[marker]];
      marker -= 1;
    }
    array[marker] = valToInsert;
  }
  return array;
}

export default insertionSort;
