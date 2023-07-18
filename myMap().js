// ! Pollyfill of map inBuilt in JavaScript

Array.prototype.myMap = function (callBackFunction) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callBackFunction(this[i], i, this));
  }
  return newArr;
};

let Arr1 = ["Hello", "bye", "Huraah!"];
let Arr2 = [1, 2, 3, 4, 5, 6, 7];

console.log(Arr1.myMap((i) => i)); // ["Hello", "bye", "Huraah!"]
console.log(Arr2.myMap((i) => i * 2)); // [2,4,6,8,10,12,14]
