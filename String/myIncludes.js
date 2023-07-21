String.prototype.myIncludes = function (substring) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === substring) {
      return true;
    }
  }
  return false;
};

let str1 = "hello";

console.log(str1.myIncludes("m")); // false
console.log(str1.myIncludes("h")); // true
