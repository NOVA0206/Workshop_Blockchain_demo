class Block {
  constructor(index, data, previousHash) {
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.timestamp = new Date().toLocaleString();
    this.hash = this.createHash();
  }

  createHash() {
    return Buffer.from(
      this.index +
      this.previousHash +
      JSON.stringify(this.data) +
      this.timestamp
    ).toString("hex");
  }
}

module.exports = Block;
