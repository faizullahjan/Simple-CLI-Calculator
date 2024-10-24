#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "First",
    },
    {
        message: "Enter Your Second Number",
        type: "number",
        name: "Second",
    },
    {
        message: "Select Any Operator to perform ActionS",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Substraction", "MultiPlication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.First + answer.Second);
}
else if (answer.Operator === "Substraction") {
    console.log(answer.First - answer.Second);
}
else if (answer.Operator === "Division") {
    console.log(answer.First / answer.Second);
}
else if (answer.Operator === "MultiPlication") {
    console.log(answer.First * answer.Second);
}
else {
    console.log("Please Select Valid Operator");
}
