const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addArr = [];
  let mainArr = [];
  let resArr = [];
  let addStr = '';

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  if (options.addition !== undefined && options.additionSeparator !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        addArr.push('' + options.addition);
    }
    addStr = addArr.join(options.additionSeparator);
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    mainArr.push('' + str);
  }

  for (let i = 0; i < mainArr.length; i++) {
    resArr.push(mainArr[i] + addStr);
  }
  return resArr.join(options.separator);
};
  
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })=>'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }), 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
