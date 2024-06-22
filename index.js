#!/usr/bin/env node
import inquirer from 'inquirer';
let todos = [];
let condition = true;
/*while(condition)

{let todoAns=await inquirer.prompt([{
name:"firstQuestion",
input:"input",
message:"what would you like to add in your todo?",
},
{
name:"secondQuestion",
type:"confirm",
message:"would you like to add more in your todo?",
default:"true",
}])
todos.push(todoAns.firstQuestion)
console.log(todos)
condition=todoAns.secondQuestion;
}*/
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View todo list",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View todo list") {
            await viewtask();
        }
        else if (option.choice === "Exit")
            condition = false;
    }
};
// Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task add sucessfyully in Todo-List`);
};
//Function to view all Todo List task
let viewtask = () => {
    console.log("\n your todo list\n");
    todos.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
//Function to delete a task from list
let deleteTask = async () => {
    await viewtask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no' of task you want to delete"
        }
    ]);
    let deleteTask = todos.splice(taskIndex.index - 1, 1);
    console.log(`\n${deleteTask}This task has been deleted sucessfully from your Todo-List\n`);
};
// function to update task
let updateTask = async () => {
    await viewtask();
    let update_ask_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no' of teh task you want to update",
        },
        {
            name: "newtask",
            type: "input",
            message: "Now Enter new task name"
        }
    ]);
    todos[update_ask_index.index - 1] = update_ask_index.newtask;
    console.log(`/nTask at index no, ${update_ask_index.index - 1} updated sucessfully [for update check option"view todo list"]`);
};
main();
