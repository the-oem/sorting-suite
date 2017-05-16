// Pseudocode
//
// Step 1 − If it is the first element, it is already sorted. return 1;
// Step 2 − Pick next element
// Step 3 − Compare with all elements in the sorted sub-list
// Step 4 − Shift all the elements in the sorted sub-list that is
// greater than the value to be sorted
// Step 5 − Insert the value
// Step 6 − Repeat until list is sorted

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

    // insert val at marker position
    array[markerPosition] = valToInsert;

  }

  return array;
}

export default insertionSort;
