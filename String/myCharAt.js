String.prototype.myCharAt = function (index) {
  if (index < 0 || index >= this.length) {
    return "";
  }
  return this[index];
};

let string1 = "hello";
let string2 = "world";
let string3 = "john";

console.log(string1.myCharAt(1)); // Expected: "e"
console.log(string2.myCharAt(-2)); // Expected: ""
console.log(string3.myCharAt(3)); // Expected: "n"
