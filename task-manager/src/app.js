const readline = require('readline');
const addTask = require('./commands/addTask');
const listTasks = require('./commands/listTasks');
const completeTask = require('./commands/completeTask');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to Task Manager!');
console.log('Commands:');
console.log('1. add-task <title> <dueDate> - Add a new task');
console.log('2. list-tasks - List all tasks');
console.log('3. complete-task <id> - Mark a task as completed');
console.log('4. exit - Exit the application');

function promptUser() {
    rl.question('Enter a command: ', input => {
        const [command, ...args] = input.split(' ');

        switch (command) {
            case 'add-task':
                addTask(args[0], args[1]);
                break;
            case 'list-tasks':
                listTasks();
                break;
            case 'complete-task':
                completeTask(args[0]);
                break;
            case 'exit':
                console.log('Goodbye!');
                rl.close();
                return;
            default:
                console.log('Invalid command.');
        }

        promptUser();
    });
}

promptUser();
