import { mainScreen, restart } from "./MainScreen.js";


import inquirer from "inquirer";
import chalk from "chalk";

async function cashWth(balance : number){
const answer = await inquirer.prompt([{
    name: "amounts",
    type: "list",
    choices: ["500", "1000", "5000", "10000", "20000", "25000", "Other Amount", "Back"],
    message: "Choose your desired amount",
}
]);


switch (answer.amounts) {
    case ("500"):
        if (balance > 500) {
            balance -= 500;
            console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
            console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
            console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));    
        } else {
            console.log(chalk.bold.redBright("\n Insufficient Balance \n"));
        }
        await restart(balance);        
        break;
    case ("1000"):
        if (balance > 1000) {
            balance -= 1000;
            console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
            console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
            console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));                
        } else {
            console.log(chalk.bold.redBright("\n Insufficient Balance \n"));
        }
        await restart(balance);
        break;
    case ("5000"):
        if (balance > 5000) {
            balance -= 5000;
            console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
            console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
            console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));
        } else {
            console.log(chalk.bold.redBright("\n Insufficient Balance \n"));
        }
        await restart(balance);
        break;
    case ("10000"):
        if (balance > 10000) {
        balance -= 10000;
        console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
        console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
        console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));    
    } else {
            console.log(chalk.bold.redBright("\n Insufficient Balance \n"));
        }
        await restart(balance);
        break;
    case ("20000"):
        if (balance > 20000) {
            balance -= 20000;
            console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
            console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
            console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));    
        } else {
            console.log(chalk.bold.redBright("\n Insufficient Balance \n"));
        }
        await restart(balance);
        break;
    case ("25000"):
        if (balance > 25000) {
            balance -= 25000;
            console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
            console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
            console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));
        } else {
            console.log(chalk.bold.redBright("\n Insufficient Balance \n"));
        }
        await restart(balance);
        break;
    case ("Other Amount"):
        console.clear();
        const answer1 = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter your amount",
                }]);            
                if (balance > answer1.amount) {
                    balance -= answer1.amount;
                    console.log(chalk.bold.greenBright("\n Transaction Succesful! \n"));
                    console.log(`Your remaining account balance is PKR ${chalk.bold.bgBlue(balance)}`);
                    console.log(chalk.italic.bgBlueBright("\n Thank you for using our services \n"));    
                } else {
                    console.log(chalk.bold.redBright("\n Invalid input or Balance Insufficient \n"));
                }
        await restart(balance);
        break;
        case("Back"):
        mainScreen(balance);
        break;
        default :
        cashWth(balance);
        await restart(balance);
        break;
    
    }
return mainScreen(balance);
}
export default cashWth;