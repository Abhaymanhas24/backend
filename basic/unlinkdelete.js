const fs = require("fs");
fs.unlink("./names.text", (err) => {
  console.log("file deleted");
});

// fs.readdir()
