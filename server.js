const express = require("express");

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("hidfdfad");
});
app.listen(PORT, (err) => {
  console.log("Runnin on PORT ", PORT);
});
