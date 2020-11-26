const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of TODO'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marc as completad or pending the TODO'
};

const argv = require('yargs')
    .command('create', 'Create a TODO element', {
        description
    })
    .command('update', 'Update a TODO element', {
        description,
        completed
    })
    .command('delete', 'Delete a TODO element', {
        description
    })
    .help()
    .argv

module.exports = {
    argv
}