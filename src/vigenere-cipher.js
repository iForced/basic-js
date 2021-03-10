
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let messageArr = [];
    for (let item of message) {
      if (item !== ' ' && letters.includes(item.toUpperCase())) {
        messageArr.push(item);
      }
    }
    let keyArr = [];
    for (let i = 0; keyArr.length < messageArr.length; i += 1) {
      keyArr.push(key[i].toUpperCase());
      if (i === key.length - 1) {
        i = -1;
      }
    }
    let messageUp = message.toUpperCase();
    let keyUp = keyArr.join('');
    let encrypted = [];
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (messageUp[i] !== ' ' && letters.includes(messageUp[i])) {
        let index = letters.indexOf(messageUp[i]) + letters.indexOf(keyUp[j]);
        encrypted.push(letters[index]);
        j += 1;
      } else {
        encrypted.push(messageUp[i]);
      }
    }
    if (this.mode === false) {
      return encrypted.reverse().join('');
    } else {
      return encrypted.join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let messageArr = [];
    for (let item of message) {
      if (item !== ' ' && letters.includes(item.toUpperCase())) {
        messageArr.push(item);
      }
    }
    let keyArr = [];
    for (let i = 0; keyArr.length < messageArr.length; i += 1) {
      keyArr.push(key[i].toUpperCase());
      if (i === key.length - 1) {
        i = -1;
      }
    }
    let messageUp = message.toUpperCase();
    let keyUp = keyArr.join('');
    let decrypted = [];
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (messageUp[i] !== ' ' && letters.includes(messageUp[i])) {
        let index = letters.indexOf(messageUp[i]) - letters.indexOf(keyUp[j]) + 26;
        decrypted.push(letters[index]);
        j += 1;
      } else {
        decrypted.push(messageUp[i]);
      }
    }
    if (this.mode === false) {
      return decrypted.reverse().join('');
    } else {
      return decrypted.join('');
    }
  }
}
module.exports = VigenereCipheringMachine;
