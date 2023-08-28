String.prototype.mylastIndexOf = function (searchString, position) {
  if (searchString.length > this.length) return -1;

  let startPosition = position !== undefined ? position : this.length;

  for (let i = startPosition; i >= 0; i--) {
    if (this[i] === searchString) {
      return i;
    }
  }
  return -1;
};

let sentence = "canal";

console.log(sentence.mylastIndexOf("a", 2)); //1
