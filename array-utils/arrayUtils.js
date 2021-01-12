Array.prototype.foreach = function (callback) {
  for (var i = 0; i < this.length; ++i) {
    callback(this[i], i, this);
  }
};

Array.prototype.customMap = function (callback) {
  let newArray = new Array();
  let mappedValue;
  for (var i = 0; i < this.length; ++i) {
    mappedValue = callback(this[i], i, this);
    newArray.push(mappedValue);
  }
  return newArray;
};

Array.prototype.customFilter = function (callback) {
  let newArray = new Array();
  let filteredValue;

  for (var i = 0; i < this.length; ++i) {
    filteredValue = callback(this[i], i, this);
    if (filteredValue) newArray.push(this[i]);
  }
  return newArray;
};

Array.prototype.customReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.reduce " + "called on null or undefined");
  }
  if (this.length == 0) {
    throw new TypeError("Array cannot be empty");
  }
  let i = 0;
  if (arguments.length < 2) {
    accumulator = this[i];
    ++i;
  } else {
    accumulator = initialValue;
  }

  while (i < this.length) {
    accumulator = callback(accumulator, this[i], i, this);
    ++i;
  }

  return accumulator;
};

// export {
//   forEach,
//   map,
//   filter,
//   reduce,
// }
