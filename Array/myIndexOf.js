Array.prototype.indexOf = function (searchElement, fromIndex) {
  for (var i = fromIndex || 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3)); // Output: 2
console.log(array.indexOf(6)); // Output: -1 (not found)
