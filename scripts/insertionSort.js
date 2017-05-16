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
  var markerPosition;
  var valToInsert;

  for (let i = 0; i < array.length; i++) {

    valToInsert = array[i];
    markerPosition = i;

    while (markerPosition > 0 && array[markerPosition - 1] > valToInsert) {
      array[markerPosition] = array[markerPosition - 1];
      markerPosition = markerPosition - 1;
    }

    array[markerPosition] = valToInsert;

  }

  return array;
}

export default insertionSort;
