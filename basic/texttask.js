// const fs = require("fs");

// const data = "stay hungry ,stay foolish";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, data, (err) => {
//     console.log(`complete writting`);
//   });
// }

const fs = require("fs");

const data = "stay hungry ,stay foolish";


const createfiles = (num) => {
  const MAX_NO_FILES =100;
  if(num>MAX_NO_FILES){
    console.log(`your pc was saved`);
    return;
  }
  for (let i = 1; i <= num; i++) {
    fs.writeFile(`text-${i}.html`, data, (err) => {
      console.log(`complete writting -text${i}`);
    });
  }
};
createfiles(process.argv[2]);
