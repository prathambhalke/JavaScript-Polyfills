String.prototype.indexOf = function (searchElement, fromIndex) {
  for (var i = fromIndex || 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

const str = "Hello, World!";
console.log(str.indexOf("o")); // Output: 4
console.log(str.indexOf("z")); // Output: -1 (not found)
