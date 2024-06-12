#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
// => Use inquirer.prompt to take userinput as number:
// and apply condition that input must be number less than 60.
let response = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter amount of seconds: ",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number. ";
        }
        else if (input > 60) {
            return "seconds must be 60";
        }
        else
            return true;
    },
});
// Declaring variable to store userReponse. 
let input = response.userInput;
function startTime(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.red("Timer has expired!"));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
// let dateObj =  new Date()
// // console.log(dateObj) // 2024-06-05T02:29:59.812Z
// // // current date
// let date = ("0" + dateObj.getDate()).slice(-2);
// console.log(date);
// // // current month
// let month = ("0"+(dateObj.getMonth()+1)).slice(-2)
// console.log(month);
// // // current year
// let year = dateObj.getFullYear();
// console.log(year);
// // current hours:
// let hours = dateObj.getHours();
// console.log(hours);
// // current minutes
// let minutes = dateObj.getMinutes();
// console.log(minutes);
// // current seconds:
// let seconds = dateObj.getSeconds();
// console.log(seconds);
// // printing date, month,year format
// console.log(year ,"-",month,"-",date )
// // console.log(date ,"/",month,"/",year )
// // printing hours and minutes
// console.log(hours,":",minutes )
// GET CURRENT TIMESTAMP
// let ts = Date.now()
// console.log(ts); // ts in miliseconds
// ts in seconds
// console.log(Math.floor(ts/1000))
// current timestamp in ms
// let dateObj = new Date(ts);
// let date = dateObj.getDate()
// console.log(date);
// let month = dateObj.getMonth() + 1;
// let year = dateObj.getFullYear();
// console.log(year + "-" + month + "-" + date);
