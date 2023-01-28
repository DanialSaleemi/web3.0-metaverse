import login from "./Login.js";
import cashWth from "./cashWithdraw.js";
import cashDeposit from "./CashDeopsit.js";
import fundsTransfer from "./FundsTransfer.js";
import uBillPayment from "./UtilityBill.js";


import chalk  from "chalk";
import inquirer from "inquirer";


async function mainScreen(balance : number) {
    let menu = await inquirer.prompt ([
        {
            name: "options",
            type: "list",
            choices: ["Balance Inquiry", "Cash Withdrawl", "Cash Deposit", "Funds Transfer", "Utility Bills Payment", "Exit"],
            message: "Please choose your transaction type",
        }
    ]);

    switch (menu.options) {
    case "Balance Inquiry":
        console.log(`\n Your current balance is PKR ${chalk.bold.green(balance)} \n`);
        await mainScreen(balance);
        break;

        case "Cash Withdrawl":
        console.clear();
        await cashWth(balance);
        break;

        case "Cash Deposit":
        console.clear();
        await cashDeposit(balance);
        break;

        case "Funds Transfer":
        console.clear();
        await fundsTransfer(balance);
        break;

        case "Utility Bills Payment":
        console.clear();
        await uBillPayment(balance);
        break;

        case "Exit":
        console.clear();
        console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));
        process.exit();
        break;
    }
    return balance;
}

async function restart(balance: number) {
    const r = await inquirer.prompt ([{
        name: "restart",
        type: "list",
        choices: ["Yes", "No"],
        message: "Would you like to make another transaction?",
    }])

    if (r.restart == "Yes") {
        console.clear();
        mainScreen(balance);
    } else{ 
        console.clear();
        console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));
        process.exit();
    }
}
export {mainScreen, restart};