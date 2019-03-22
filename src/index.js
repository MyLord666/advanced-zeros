module.exports = function getZerosCount(number, base) {
  // your implementation
  let zeros = 0;
  let remainder = 1;
  let divisor = 2;

  while (base !== divisor) {
    if (base % divisor === 0) {
      remainder++;
      base /= divisor;

    } else {
      remainder = 1;
      divisor++;
    }
  }

  while (num > 0) {
    num = num / divisor ^ 0;
    zeros += num;
  }
  return parseInt(zeros / remainder);
}
