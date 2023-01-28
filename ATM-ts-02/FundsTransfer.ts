import { restart } from "./MainScreen.js";


import inquirer from "inquirer";
import chalk from "chalk";

async function fundsTransfer(balance: number) {
    const ft = await inquirer.prompt ([{
        name: "accNum",
        type: "input",
        message: "Enter payee's Account Number(last 5 digits only)"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to transfer",
        validate: (answer : number) => {
            if (isNaN(answer)) {
                return "Invalid input";
            }
            return true;
        }
    }
]);

balance -= ft.amount;
console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
console.log(`\n Your remaining account balance is ${balance} \n`)
return restart(balance);
}

export default fundsTransfer;