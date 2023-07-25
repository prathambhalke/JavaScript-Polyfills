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
let str2 = "brother";
console.log(str2.myRepeat(5));
let str3 = "sister";
console.log(str3.myRepeat(-1));
