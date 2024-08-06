const fs = require("fs");

// fs.readFile("./backup/text-1.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log("oops:", err);
//   } else {
//     console.log(data);
//   }
// });

fs.appendFile("./backup/text-1.html", "\n1223456677", (err) => {
  if (err) throw err;
  {
    console.log("the data");
  }
});
