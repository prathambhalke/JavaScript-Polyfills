//! Polyfill for Concat
String.prototype.myConcat = function (...args) {
  let result = [this];
  for (let i = 0; i < args.length; i++) {
    result.push(args[i]);
  }
  return result;
};

const str1 = "Hello";
const str2 = " World";
const concatenatedStr = str1.myConcat(str2);
console.log(concatenatedStr); // Output: "Hello World"
