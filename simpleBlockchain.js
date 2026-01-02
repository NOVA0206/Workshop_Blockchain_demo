const Block = require("./blockchain");

class Blockchain {
  constructor() {
    this.chain = [this.createFirstBlock()];
  }

  createFirstBlock() {
    return new Block(0, "First Block", "0");
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const newBlock = new Block(
      this.chain.length,
      data,
      this.getLastBlock().hash
    );
    this.chain.push(newBlock);
    return newBlock;
  }
}

module.exports = Blockchain;
