function quickSort(array) {
  if (!(array instanceof Array)) {
    return 'This is not an array!';
  }

  let left = [];
  let right = [];
  let ce = 0;
  let p = array.length - 1
  let pVal = array[p]
  let we = 0;

  while (array.length > 1) {
    if (array[ce] >= array[p]) {
      ce++;

    } else if (array[ce] < array[p]) {

      [ array[ce], array[we] ] = [ array[we], array[ce] ];
      we++;
      ce++

    } else {
      [ array[p], array[we] ] = [ array[we], array[p] ]
      p = we;
      right = array.splice(p + 1)
      left = array.splice(0, p)

      return [...quickSort(left), pVal, ...quickSort(right)]
    }
  }
  return array
}

export default quickSort;
