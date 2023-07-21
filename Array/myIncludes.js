Array.prototype.myIncludes = function (substring) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === substring) {
      return true;
    }
  }
  return false;
};

let str1 = ["hello", "world", 5];

console.log(str1.myIncludes("bro")); // false
console.log(str1.myIncludes("hello")); // true
console.log(str1.myIncludes(5)); // true
