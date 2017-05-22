const insertionSort = arr => {
  if (!(arr instanceof Array)) {
    return 'This is not an array!';
  }

  for (let i = 0; i < arr.length; i++) {
    let valToInsert = arr[i];
    let marker = i;

    while (marker > 0 && arr[marker - 1] > valToInsert) {
      [arr[marker], arr[marker - 1]] = [arr[marker - 1], arr[marker]];
      marker -= 1;
    }
    arr[marker] = valToInsert;
  }
  return arr;
}

export default insertionSort;
