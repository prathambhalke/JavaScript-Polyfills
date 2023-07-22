Array.prototype.myPush = function (...elements) {
  const arr = this;

  for (let i = 0; i < elements.length; i++) {
    arr[arr.length] = elements[i];
  }

  return arr.length;
};

let arr = [1, 2, 3, 4];
arr.myPush("ioio"); // [ 1, 2, 3, 4, 'ioio']
arr.myPush(5); // [ 1, 2, 3, 4, 'ioio', 5 ]
console.log(arr);
