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
