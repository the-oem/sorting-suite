function genRandNumArray(arrayLength, min = 1, max = 1000) {
  let returnArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let rand = Math.floor((Math.random()) * ((max - min) + min)) + 1;

    rand % 2 ? rand = -Math.abs(rand) : rand = Math.abs(rand);
    returnArray.push(rand);
  }

  return returnArray;
}

export default genRandNumArray;
