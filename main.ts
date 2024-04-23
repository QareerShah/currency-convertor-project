#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellowBright.italic("\n\t Welcome to 'Qareer-ul-ain'  Currency Convertor\n\t"));


// Define the list of currencies and their exchange rate

let exchangeRate : any = {
    "USD" : 1,    
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 277.70,
    // Add more countries and their exchange rates here
}

// prompt the user to select currencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD","EUR","JYP","CAD", "AUD" ,"PKR" ],
    },
    {
        name:"to_currency",
        type:"list",
        message: "select the currency to convert to:",
        choices: ["USD","EUR","JYP","CAD", "AUD" ,"PKR" ],

    },
    {
        name:"amount",
        type:"input",
        message: "Enter the amount to convert:",
    },
]);
// perform currency conversion by using formulae
let fromAmount = exchangeRate[userAnswer.from_currency];
let to_amount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount

// formulae of conversion 
let base_amount = amount / fromAmount 
let convertedAmount = base_amount * to_amount

// display the converted amount 
console.log(`converted amount = ${convertedAmount.toFixed(2)}`);
