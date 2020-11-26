const fs = require('fs');
const { argv } = require('process');

let listToDos = [];

const saveDB = () => {
    let data = JSON.stringify(listToDos);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Save was failed', err);
    });
}

const loadDB = () => {

    try {
        listToDos = require('../db/data.json');
        //console.log(listToDos);
    } catch (error) {
        listToDos = [];
    }
}

const create = (descripcion) => {

    loadDB();
    let toDo = {
        description,
        completed: false
    };
    listToDos.push(toDo);
    saveDB();
    return toDo;
}

const getListToDo = () => {
    loadDB();
    return listToDos;
}

const getListToDoCompleted = (completed) => {
    loadDB();
    if (typeof completed != null) {
        return listToDos;
    } else {
        let newlistToDos = listToDos.filter(todo => todo.completed === completed);
        return newlistToDos;
    }
}

const update = (description, completed = true) => {
    loadDB();
    let index = listToDos.findIndex(toDo => toDo.description === description);
    if (index >= 0) {
        listToDos[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const erase = (descripcion) => {
    loadDB();

    let newlistToDos = listToDos.filter(toDo => toDo.description !== description)

    if (listToDos.length === newlistToDos.length) {
        return false
    } else {
        listToDos = newlistToDos;
        saveDB();
        return true;
    }
}


module.exports = {
    create,
    getListToDo,
    update,
    erase,
    getListToDoCompleted
}