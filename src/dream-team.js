const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let tempArr = [];
  let arr = [];

  if (!members || !Array.isArray(members) || members == null) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string') {
      continue;
    }
    tempArr.push(members[i].trim());
  }
  for (let i = 0; i < tempArr.length; i++) {
    arr.push(tempArr[i].toLowerCase().substring(0, 1));
  }

  return arr.sort().join('').toUpperCase();
};
