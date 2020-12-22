const arrayCubeRootToJson = (arr) => {
  let cubeObj = {};
  cubeRootArray = arr.map((element) => {
    cubeObj[element] = Math.cbrt(element);
  });

  return cubeObj;
};
try {
  let arr = [27, 64, 1.24, Infinity];

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
    if (isNaN(arr[index])) {
      isValidInput = false;
      break;
    }
  }
  return isValidInput;
}

module.exports.arrayCubeRootToJson = arrayCubeRootToJson;
