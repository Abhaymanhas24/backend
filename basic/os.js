const os = require("os");
console.log(os.freemem() / 1024 / 1024 / 1024);
console.log(os.totalmem() / 1024 / 1024 / 1024);

const ram = (a) => `${(a / 1024 ** 3).toFixed(2)} GB`;
const occupiedmemory = (free, total) =>
  `${((1 - free / total) * 100).toFixed(2)} %`;
console.log(ram(os.freemem()));
console.log(ram(os.totalmem()));
console.log(occupiedmemory(os.freemem(), os.totalmem()));
