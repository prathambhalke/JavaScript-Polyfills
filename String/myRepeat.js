String.prototype.myRepeat = function (count) {
  if (count < 0) {
    throw new RangeError("Repeat count must be non-negative");
  }
  var result = "";
  var pattern = this.toString();
  for (var i = 0; i < count; i++) {
    result += pattern;
  }
  return result;
};

let str = "hello";
console.log(str.myRepeat(2));
