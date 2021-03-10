// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw Error();
//   }
//   if (!arr.length) {
//     return [];
//   }

//   let newArr = [];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == '--discard-next') {
//       if (i == arr.length - 1) {
//         continue;
//       } else {
//         i++;
//       }
//     } else if (arr[i] == '--discard-prev') {
//       if (i == 0) {
//         continue;
//       } else {
//         if (arr[i - 2] == '--discard-next') {
//           continue;
//         } else {
//           newArr.pop();
//         }
//       }
//     } else if (arr[i] == '--double-next') {
//       if (i == arr.length - 1) {
//         continue;
//       } else {
//         newArr.push(arr[i + 1]);
//         newArr.push(arr[i + 1]);
//         i++;
//       }
//     } else if (arr[i] == '--double-prev') {
//       if (i == 0) {
//         continue;
//       } else {
//         if (arr[i - 2] == 'discard-next') {
//           continue;
//         } else {
//           newArr.push(newArr[newArr.length - 1]);
//         }
//       }
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error();
  }
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i !== arr.length - 1) {
        i++;
      } else {
        continue;
      }
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
      else if(i !== 0) {
        newArr.pop();
      } else {
        continue;
      }
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        newArr.push(arr[i + 1]);
        newArr.push(arr[i + 1]);
        i++;
      } else {
        continue;
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
         else if(i !== 0) {
          newArr.push(newArr[newArr.length - 1]);
        }
          else {
          continue;
        }
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr; 
}