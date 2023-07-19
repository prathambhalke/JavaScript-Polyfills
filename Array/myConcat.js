Array.prototype.myConcat = function (...args) {
  let newArray = [...this];

  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        newArray[newArray.length] = args[i][j];
      }
    } else {
      newArray[newArray.length] = args[i];
    }
  }

  return newArray;
};

const str1 = ["Hello"];
const str2 = [" World"];
const concatenatedStr = str1.myConcat(str2);
console.log(concatenatedStr); // Output: "Hello World"
