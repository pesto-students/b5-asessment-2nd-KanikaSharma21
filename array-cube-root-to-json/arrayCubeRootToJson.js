const arrayCubeRootToJson = (arr) => {
  let cubeRootArray = [];
  let cubeObj = {};
  arr.forEach((element) => {
    cubeObj = {};
    let value = Math.cbrt(element);
    let elem = element.toString();
    cubeObj = { elem: elem, value: value };
    cubeRootArray.push(cubeObj);
  });

  cubeObj = Object.assign(...cubeRootArray.map((key) => Object.values(key)).map((value) => ({ [value[0]]: value[1] })));
  return cubeObj;
};
try {
  let arr = [27, 64, Infinity];

  let isValidInput = validation(arr);
  if (isValidInput) {
    let result = arrayCubeRootToJson(arr);
    console.log(result);
  } else {
    console.log("Please enter a valid input");
  }
} catch (err) {
  console.log(err);
}

//validation function
function validation(arr) {
  let isValidInput = true;
  isValidInput = Array.isArray(arr);
  if (isValidInput == false) {
    return isValidInput;
  }
  for (let index = 0; index < arr.length; ++index) {
    if (arr[index] != Infinity) {
      if (Number.isInteger(arr[index]) == false) {
        isValidInput = false;
        break;
      }
    }
  }
  return isValidInput;
}

module.exports.arrayCubeRootToJson = arrayCubeRootToJson;
