#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
async function intro() {
    console.clear();
    let msg = "Guess the number \n";
    figlet(msg, (err, data) => {
        console.log(gradient.fruit.multiline(data));
    });
}
async function welcome() {
    const intromsg = chalkAnimation.pulse(`\n Try a number between 0 and 10 to check if it matches with computer's random number \n`);
    await sleep();
    intromsg.start();
    await sleep(1500);
    console.log(chalk.cyan(`Total attempts = ${attemptsLeft}`));
}
let attemptsLeft = 3;
async function guessOp() {
    await sleep();
    if (attemptsLeft < 1) {
        console.log(`\n ☠  ☠  ☠  ${chalk.red('Attempts finished! Run again to restart game')} \n`);
        process.exit(1);
    }
    else {
        console.log(`\n Attempts remaining: ${attemptsLeft} \n`);
        let numIn = await inquirer.prompt([
            {
                name: "in",
                type: "number",
                message: chalk.greenBright("Enter your number:"),
            },
        ]);
        let numInRange;
        if (numIn.in < 0 || numIn.in > 10) {
            numInRange = false;
        }
        else {
            numInRange = true;
        }
        return handleAnswer(numIn.in, numInRange);
    }
}
async function handleAnswer(numTest, numRange) {
    const spinner = createSpinner("Checking Answer...").start();
    await sleep();
    attemptsLeft--;
    if (numTest === numGen) {
        spinner.success({ text: `Hurray! You guessed it right` });
    }
    else if (numTest < numGen && numRange === true) {
        spinner.error({ text: "Try again with a bigger number" });
        guessOp();
    }
    else if (numTest > numGen && numRange === true) {
        spinner.error({ text: "Try again with a smaller number" });
        guessOp();
    }
    else {
        spinner.error({
            text: `${chalk.bgRed("Incorrect input!")} Expects a number between 0 & 10`,
        });
        guessOp();
    }
}
let numGen = Math.random() * 10;
numGen = Number(numGen.toFixed(0));
await intro();
await welcome();
await guessOp();
