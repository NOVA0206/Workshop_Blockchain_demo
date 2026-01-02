const express = require("express");
const Blockchain = require("./simpleBlockchain");
const cors = require("cors");

const app = express();
app.use(cors()); // ✅ ALLOW FRONTEND REQUESTS
app.use(express.json());

const myChain = new Blockchain();

app.post("/save", (req, res) => {
  const block = myChain.addBlock(req.body);
  res.json(block);
});

app.get("/chain", (req, res) => {
  res.json(myChain.chain);
});

app.listen(3000, () => {
  console.log("Blockchain running on port 3000");
});
