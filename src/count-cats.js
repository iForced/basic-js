const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cat = '^^';
  let cats = [];
  
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] == cat) {
        cats.push(backyard[i][j]);
      }
    }
  }
  return cats.length;
};
