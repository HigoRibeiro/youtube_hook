const express = require("express");
const app = express();

const { User } = require("./models");

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

app.listen(3000);
