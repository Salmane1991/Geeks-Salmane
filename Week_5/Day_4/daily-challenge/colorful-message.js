import chalk from "chalk";

function displayColor(message) {
  console.log(chalk.red.bgWhite.bold(message));
}

// displayColor("I love Morocco");
export { displayColor };
