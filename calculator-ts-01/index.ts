#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from 'figlet';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

function intro() {
    console.clear();
    const msg = "Simple Calculator \n";

    figlet(msg, (err, data) => {
        console.log(gradient.instagram.multiline(data));   
        console.log(chalk.magentaBright('It can perform basic arithmatic operations \n'));
        });
    
}
intro();



async function calcOp() {
    await sleep();
    
let operand1 = await inquirer.prompt([{
    name: "op",
    type: "number",
    message: chalk.greenBright("Enter a number:")}
]);

let operator = await inquirer.prompt([{
    name: "op",
    type: "string",
    message: chalk.greenBright("Select the operator, eg: + - * / \n"),
}
]);

let operand2 = await inquirer.prompt([{
    name: "op",
    type: "number",
    message: chalk.greenBright("Enter another number:")}
]);

    let answer = null;
    if      (operator.op == '+') {answer = operand1.op + operand2.op;
        console.log(chalk.bold.rgb(255, 165, 0)(`\n Result: ${operand1.op} ${operator.op} ${operand2.op}  =  ${answer} \n`));
    }
    else if (operator.op == '-') {answer = operand1.op - operand2.op;
        console.log(chalk.bold.rgb(255, 165, 0)(`\n Result: ${operand1.op} ${operator.op} ${operand2.op}  =  ${answer} \n`));
    }
    else if (operator.op == '*') {answer = operand1.op * operand2.op;
        console.log(chalk.bold.rgb(255, 165, 0)(`\n Result: ${operand1.op} ${operator.op} ${operand2.op}  =  ${answer} \n`));
    }
    else if (operator.op == '/') {answer = operand1.op / operand2.op;
        console.log(chalk.bold.rgb(255, 165, 0)(`\n Result: ${operand1.op} ${operator.op} ${operand2.op}  =  ${answer} \n`));
}
    else {answer = "INVALID INPUTS";
    console.error(chalk.bold.redBright(answer));
    };
async function exitMap() {
  let computeAgain = await inquirer.prompt([{
        name: "ca",
        type: "string",
        message: chalk.yellowBright(`\n try again?`),
    }
    ]);
    let resCheck = computeAgain.ca.toLowerCase(); 
    if (resCheck === 'yes' ) {
        calcOp();
    }
    else if (resCheck === 'no') {
        console.log("exiting");
    }
    else{
        console.log(chalk.bold.italic.bgRed("type 'yes' or 'no'"));
        exitMap();
        
    }
}
exitMap();    
    
}


calcOp();
