import chalk from "chalk";

let blue = chalk.red.bgRed.bold("hello");
let color = chalk.green(
  `I am a green line ${chalk.blue.underline.bold(
    "with a blue substring"
  )} that becomes green again!`
);

console.log(color);

