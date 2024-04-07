#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [""];
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What would you like to add in you todos?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    condition = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input ");
    }
    console.log(todos);
    if (todos.length > 0) {
        console.log("your Todo list: ");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("Not Todos Found");
    }
}
