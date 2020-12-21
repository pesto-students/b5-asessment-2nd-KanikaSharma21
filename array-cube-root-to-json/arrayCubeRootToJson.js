const arrayCubeRootToJson = (arr) => {
  let validateArray = Array.isArray(arr);
  if (validateArray == false) {
    throw "Please enter valid input";
  }
  let cubeRootArray = [];
  let cubeObj = {};
  arr.forEach((element) => {
    cubeObj = {};
    let value = Math.cbrt(element);
    let elem = element.toString();
    cubeObj = { elem: elem, value: value };
    cubeRootArray.push(cubeObj);
  });
  cubeObj = {};
  cubeRootArray.forEach((item) => (cubeObj[item.elem] = item.value));
  let cubeRoot = JSON.stringify(cubeObj);
  return cubeRoot;
};
try {
  let arr = [false];
  let result = arrayCubeRootToJson(arr);
  console.log(result);
} catch (err) {
  console.log(err);
}

module.exports.arrayCubeRootToJson = arrayCubeRootToJson;
