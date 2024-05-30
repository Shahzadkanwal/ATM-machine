#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 7000;
let myPin = 1234;

console.log("Welcome to Bismillah Kanwal - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {   name : "pin",
        type : "number",
        message : "Enter Your Pin Code",
    }
]) 
if(pinAnswer.pin === myPin){
    console.log("Pin is Correct , Login Succesfully");
    //console.log(`Current Account Balance is ${myBalance}`);

let operationAns = await inquirer.prompt([
    {    
          name : "operation",
          type : "list",
          message : "Select an Operation",
          choices :["Withdraw Amount","Check Balance"]

    
    }
])
if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        { 
          name :"amount",
          type : "number",
          message:"Enter your amount to withdraw:"
         }
    ]) 
    if(amountAns.amount > myBalance){
        console.log("Insufficient Balance !")
    }
    else{
         myBalance -= amountAns.amount;
         console.log(`${amountAns.amount} Withdraw Successfully! `);
         console.log(`Your remaining balance is ${myBalance}`);
    
    }
    
} else if (operationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is : ${myBalance}`)
}
}
else{
    console.log("Pin is incorrect , Try Again !")
}