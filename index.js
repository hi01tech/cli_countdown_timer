#! /usr/bin/env node
// Used this " npm i inquirer@9.3.2 " command to install inquirer
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
console.log("\n");
console.log(chalk.rgb(231, 161, 176)("-".repeat(60)));
console.log(chalk.bold.rgb(255, 255, 146) `\n\tWelcome to "hi01tech" Countdown Timer\n`);
console.log(chalk.rgb(231, 161, 176)("-".repeat(60) + "\n"));
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of seconds: ",
    validate: (input) => {
        if (isNaN(input)) {
            return chalk.rgb(216, 31, 42)("Please enter valid number\n");
        }
        else if (input > 60) {
            return chalk.rgb(216, 31, 42)("Second must be in 60");
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log(chalk.rgb(255, 255, 146)("\nTimer has expirerd!"));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
