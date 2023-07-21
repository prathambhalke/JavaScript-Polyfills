//! Polyfill for Concat
String.prototype.myConcat = function (arguments) {
  var concatenatedString = this.valueOf();

  for (var i = 0; i < arguments.length; i++) {
    concatenatedString += arguments[i];
  }

  return concatenatedString;

  //! OR
  // return this + arguments;
};

const str1 = "Hello";
const str2 = " World";
const concatenatedStr = str1.myConcat(str2);
console.log(concatenatedStr); // Output: "Hello World"
