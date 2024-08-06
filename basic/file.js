const fs = require("fs");

const data = "stay hungry ,stay foolish";

fs.writeFile("names.txt", data, (err) => {
  console.log("completed Writting");
});
