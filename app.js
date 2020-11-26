//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const toDo = require('./todo/todo');
const colors = require('colors');


//console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let todo = toDo.create(argv.description);
        console.log(todo);
        //console.log('Create TODO');
        break;
    case 'list':
        //console.log('List all ToDos');
        let listToDo = toDo.getListToDo();
        //let listToDo = toDo.getListToDoCompleted(argv.completed);
        for (let todo of listToDo) {
            console.log('=========TODO========='.green);
            console.log(todo.description);
            console.log('State: ', todo.completed);
            console.log('======================'.green);
        }
        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        //console.log('Actualizar TODO');
        break;
    case 'erase':
        let erased = toDo.erase(argv.description);
        console.log(erased);
        //console.log('Update TODO');
        break;
    default:
        console.log('Command unknown.');
}