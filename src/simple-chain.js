const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments == 0) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain.length = 0;
      throw Error('Error');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain.length = 0;
    return res;
  }
};

module.exports = chainMaker;

// chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');