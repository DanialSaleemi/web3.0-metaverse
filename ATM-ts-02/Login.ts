import { mainScreen } from "./MainScreen.js";
import regUsers from "./Users.js";
import sleep from "./index.js"


import inquirer from "inquirer";
import chalk from "chalk";

async function login() {
    console.clear();
    console.log(chalk.bold.dim.bgWhite("\t\t LOGIN \n"));
    let ans = await inquirer.prompt([
        {
        name: "userAcc",
        type: "number",
        message: chalk.greenBright("Enter your Account Number (last 5 digits)"),
        },

        {
            name: "PIN",
            type: "password",
            message: chalk.greenBright("Enter your PIN code"),
        },
    ]);

    let user = regUsers.find (x => x.accNumber===ans.userAcc && x.pin==ans.PIN)
   
    if (user) {
        console.log(`Welcome ${chalk.italic(user.name)}`);
        return mainScreen(user.accountBalance);
    } else {
        console.log(chalk.bold.redBright("\n\t\tCredentials do not match \n\n\t\t\tTry again"));
        await sleep(1000);
        login();
    }
   // return user?.accountBalance;
}

export default login;