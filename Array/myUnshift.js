Array.prototype.myUnshift = function (element) {
  return [element, ...this];
};

let Arr = ["world", "john", "doe"];

console.log(Arr.myUnshift("hello"));
