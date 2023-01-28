import { mainScreen, restart } from "./MainScreen.js";

import inquirer from "inquirer";
import chalk from "chalk";

async function cashDeposit(balance: number) {
    const cashDep = await inquirer.prompt([{
        name: "cd",
        type: "number",
        message: "Enter the amount to deposit",
        validate: (answer: number) => {
            if (isNaN(answer)){
                return chalk.red("Input should be a number only")
            }
            return true;
         }
    }]);


    balance += cashDep.cd;
    console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
    console.log(`Your new balance is PKR ${chalk.bgWhiteBright.bold(balance)}`);
    console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));
    return restart(balance);
}

export default cashDeposit;