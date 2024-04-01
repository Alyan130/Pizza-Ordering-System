#! /usr/bin/env node

//shabang
import inquirer from "inquirer";

console.log("Welcome to Pizza Resturant");
console.log();
console.log("MENU:");
console.log("Large pizza:1000rs");
console.log("Meduim pizza:700rs");
console.log("Small pizza:400rs");
console.log();
let luckyCode=12345;

let order=await inquirer.prompt([
    {
        message:"Order your pizza now!",
        type:"list",
        name:"pizzaOrder",
        choices:["Order pizza","lucky Winner","Feedback","Set Address"],
    }
]);
if(order.pizzaOrder=="Order pizza"){
    let quantity=await inquirer.prompt([
        {
            message:"Which pizza do you want to order:",
            type:"list",
            name:"range",
            choices:["Large pizza","Meduim pizza","Small pizza"],
        }
    ]);
    if(quantity.range=="Large pizza"){
        let price1=await inquirer.prompt([
            {
                message:"Enter amount :\n",
                type:"number",
                name:"amount1",
            }
        ]);
        if(price1.amount1==1000){
            console.log("Your large pizza is on the way!!!");
        }else{
            console.log("Sorry insufficient amount");
        }
    }
    else if(quantity.range=="Meduim pizza"){
        let price2=await inquirer.prompt([
            {
                message:"Enter amount :\n",
                type:"number",
                name:"amount2",
            }
        ]);
        if(price2.amount2==700){
            console.log("Your Meduim pizza is on the way!!!");
        }else{
            console.log("Sorry insufficient amount");
        }
    }
    else if(quantity.range=="Small pizza"){
        let price3=await inquirer.prompt([
            {
                message:"Enter amount :\n",
                type:"number",
                name:"amount3",
            }
        ]);
        if(price3.amount3==400){
            console.log("Your Small pizza is on the way!!!");
        }else{
            console.log("Sorry insufficient amount....");
        }
    }
}
else if(order.pizzaOrder=="lucky Winner"){
    let couponCode=await inquirer.prompt([
        {
            message:"Enter Lucky Coupon code for special gift :\n",
            type:"number",
            name:"code",
        }
    ]);
    if(couponCode.code==luckyCode){
        console.log("Congratulations! you recieved 2 small pizzas for free(* _ *)");
    }else{
        console.log("Try again!")
    }
}
else if(order.pizzaOrder=="Feedback"){
    let reviewInput=await inquirer.prompt([
        {
            message:"Enter your Feedback regarding our meal:\n ",
            type:"String",
            name:"review",
        }
    ]);
    console.log("Thank you for feedback....");
}
else if(order.pizzaOrder=="Set Address"){
let place=await inquirer.prompt([
    {
        message:"Enter your address: \n",
        type:"address",
        name:"adr",
    }
]);
console.log("your address is set...");
}


 