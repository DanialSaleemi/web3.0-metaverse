#!/usr/bin/env node
import login  from "./Login.js";

import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function intro() {
  console.clear();
  const msg = chalkAnimation.pulse(`A basic structure of ATM with following functionalities: 
                                    \n Login \t\t\t Cash Withdrawl \n\n Funds Transfer \t Utility Payments \n\n Cash Deposit \t\t Balance Inquiry`);
  
  msg.render;
  await sleep(1000);
  msg.stop();
 
}


export default sleep;

await intro();
await sleep(1000);
console.clear();
await login();


