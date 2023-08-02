Array.prototype.myFlat = function (depth) {
  if (this.length === 0) return -1;
  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth !== 0) {
      output.push(...this[i].myFlat(depth - 1));
    } else {
      output.push(this[i]);
    }
  }
  return output;
};

let Arr = [1, 2, 3, [4, 5, [6, 7, 8]]];

const flattenWithTwo = Arr.myFlat(5);
console.log(flattenWithTwo);
