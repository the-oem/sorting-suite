function bubbleSort(array) {
  var newArray = array;

  if (typeof array === 'string') {
    newArray = newArray.split('');
  }
  for (var j = 0; j < newArray.length; j++) {
    for (var i = 0; i < newArray.length; i++ ) {
      if (newArray[i] > newArray[i + 1]) {
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
      }
    }
  }

  return newArray
}

export default bubbleSort;
