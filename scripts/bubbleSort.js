const bubbleSort = arr => {
  var newArray = arr;

  if (typeof arr === 'string') {
    newArray = [...newArray];
  }
  for (let j = 0; j < newArray.length; j++) {
    for (let i = 0; i < newArray.length; i++ ) {
      if (newArray[i] > newArray[i + 1]) {
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
      }
    }
  }

  return newArray
}

export default bubbleSort;
