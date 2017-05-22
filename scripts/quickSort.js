const quickSort = arr => {
  if (!(arr instanceof Array)) {
    return 'This is not an array!';
  }

  let left = [];
  let right = [];
  let ce = 0;
  let p = arr.length - 1
  let pVal = arr[p]
  let we = 0;

  while (arr.length > 1) {
    if (arr[ce] >= arr[p]) {
      ce++;
    } else if (arr[ce] < arr[p]) {
      [ arr[ce], arr[we] ] = [ arr[we], arr[ce] ];
      we++;
      ce++
    } else {
      [ arr[p], arr[we] ] = [ arr[we], arr[p] ]
      p = we;
      right = arr.splice(p + 1)
      left = arr.splice(0, p)
      return [...quickSort(left), pVal, ...quickSort(right)]
    }
  }
  return arr
}

export default quickSort;
