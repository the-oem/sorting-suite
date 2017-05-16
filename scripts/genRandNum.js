function genRandNum(arrayLength) {
  let returnArray = [];

  for (let i = 0; i < arrayLength; i++) {
    returnArray.push(Math.floor(Math.random() * 10000));
  }

  return returnArray;
}

export default genRandNum;
