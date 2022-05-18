const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        default :'incomplete'
    }


})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo