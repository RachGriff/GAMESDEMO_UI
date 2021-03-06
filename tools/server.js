const express = require("express");
const path = require("path");
const open = require("open");
const compression = require("compression");

/*eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static("public"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log(`listening on port ${port}`);
  open(`http://localhost:${port}`);
});
