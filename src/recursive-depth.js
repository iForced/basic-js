const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count = this.calculateDepth(arr[i]) + 1;
        depth = Math.max(depth, count);
      }
    }
    return depth;
  }
};