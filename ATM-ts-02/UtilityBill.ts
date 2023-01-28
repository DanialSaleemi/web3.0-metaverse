import { mainScreen, restart } from "./MainScreen.js";

import inquirer from "inquirer";
import chalk from "chalk";

const Electricity = Math.ceil(Math.random()*1000 + 1);
const Gas = Math.ceil(Math.random()*1000 + 1);
const Phone = Math.ceil(Math.random()*1000 + 1);
const Internet = Math.ceil(Math.random()*1000 + 1);

async function uBillPayment(balance: number) {
    console.clear();
    const answer = await inquirer.prompt([{
        name: "billtype",
        type: "list",
        choices: ["Electricity", "Gas", "Phone", "Internet"],
        message: "Select your Utility Bill to be paid:"
    }]);

    switch(answer.billtype) {
    case ("Electricity"):
        balance -= Electricity;
        console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
        console.log(`PKR ${Electricity} has been paid against Electricity Bill`);
        console.log(`\n Your remaining account balance is ${balance} \n`);        
        mainScreen(balance);
    break;
    case ("Gas"):
        balance -= Gas;
        console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
        console.log(`PKR ${Gas} has been paid against Gas Bill`);
        console.log(`\n Your remaining account balance is ${balance} \n`);
        mainScreen(balance);
    break;
    case ("Phone"):
        balance -= Phone;
        console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
        console.log(`PKR ${Phone} has been paid against Phone Bill`);
        console.log(`\n Your remaining account balance is ${balance} \n`);
        mainScreen(balance);
    break;
    case ("Internet"):
        balance -= Internet;
        console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
        console.log(`PKR ${Phone} has been paid against Phone Bill`);
        console.log(`\n Your remaining account balance is ${balance} \n`);
        mainScreen(balance);
    break;
    }
    return balance;
}

export default uBillPayment;