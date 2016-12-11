/**
 *   @author Thrasher, Isaac
 *   @version 0.0.2
 *   @summary Project 7 || created: 12.11.2016
 *   @todo
 */

"use strict";
const PROMPT= require('readline-sync');
const printGoodbye = require('./printGoodbye.js');

class atmMachine {
    constructor() {
        this.cardName = (PROMPT.question(`What is your name as shown on card? `));
        this.setCardName();
        this.askCardNum();
        this.pinNum = (PROMPT.question(`What is your pin number? \n`));
        this.askPinNum();
        this.startBal();
        this.userChoice();

    }
    setCardName() {
        console.log(`\n Your name is ${this.cardName}. `);
    }
    askCardNum(){

        const   MIN_NUM = 1,
            MAX_NUM = 9999;
        this.cardNum = (PROMPT.question(`Please insert your card number: `));
        if (this.cardNum < MIN_NUM || this.cardNum > MAX_NUM) {
            console.log(`${this.cardNum} is an incorrect value. Please try again.`);
             this.askCardNum();
        }
        else {
            console.log(`\n Your card number is ${this.cardNum}!`);
        }
    }
    askPinNum(){
        console.log(`Your pin number is ${this.pinNum}`);

        }

    startBal() {
        this.currentMoney = 1000;
    }

    userChoice(){
        process.stdout.write('\x1Bc');
        this.choice = Number(PROMPT.question(`What do you want to do? \n Please press 1 to withdraw money.  \n Please press 2 to deposit money.  \n Please press 3 to transfer funds. \n Please press 4 to check your current balance. \n Please press any other key to exit \n`));

        if(this.choice == 1) {
            this.makeWithdraw();
        }
        else if (this.choice == 2) {
            this.makeDeposit();
        }
        else if (this.choice == 3) {
            this.transFunds();
        }
        else if (this.choice == 4) {
            this.currentBalance();
        }
        else {
            new printGoodbye();
        }
    }
    makeWithdraw() {
        this.withDraw = PROMPT.question(`How much money would you like to withdraw?  \n`);
        this.currentMoney = this.currentMoney - this.withDraw;
        this.userChoice();
    }
    makeDeposit(){
        this.deposit = PROMPT.question(`How much money would you like to deposit?  \n`);
        this.currentMoney = Math.floor(this.deposit +++ this.currentMoney);
        this.userChoice();
    }
    transFunds() {
        this.transferFunds = PROMPT.question(`How much money would you like to transfer?  \n`);
        this.currentMoney = this.currentMoney - this.transferFunds;
        this.userChoice();
    }
    currentBalance() {
        console.log(this.currentMoney);
        PROMPT.question(`\n Please press enter to continue. \n`);
        this.userChoice();
    }


    }






module.exports = atmMachine;