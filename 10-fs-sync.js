const { readFileSync, writeFileSync } = require("fs");

console.log('starting task')
const first = readFileSync("./content/first.txt", "utf-8");

const second = readFileSync("./content/first.txt", "utf-8");
writeFileSync("./content/result.txt", `Result: ${first + second}`, {
  flag: "a",
});
console.log('done with this task.')

console.log("starting the next one");
