function mergeSort(arr) {
  if (!(arr instanceof Array)) {
    return 'This is not an array!';
  }

  if (arr.length === 1) {
    return arr;
  }

  let splitAt = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, splitAt);
  let arr2 = arr.slice(splitAt);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  var arr3 = [];

  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] > arr2[0] ? arr3.push(arr2.shift()) : arr3.push(arr1.shift());
  }

  while (arr1.length > 0) {
    arr3.push(arr1.shift());
  }

  while (arr2.length > 0) {
    arr3.push(arr2.shift());
  }

  return arr3;
}

export default mergeSort;
