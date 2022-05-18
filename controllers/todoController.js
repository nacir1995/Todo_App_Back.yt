const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel');

exports.createTodo = asyncHandler(async(req, res) => {
    const {task, condition} = req.body
    const todo = await Todo.create({task, condition});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task is created successfully'
    })
})

exports.updateTodo = asyncHandler(async (req, res) => {
    const {task, condition} = req.body
    const existTask = await Todo.findOne({_id : req.params.id})
    if(existTask) {
    existTask.task = task;
    existTask.condition = condition
    const updateTodo = await existTask.save();
    res.status(201).json({
        success: true,
        data: task,
        message: 'Task is updated successfully'
    })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }


})

exports.deleteTodo = asyncHandler(async(req, res) => {
    const {task, condition} = req.body
    const existTask = await Todo.findOne({_id : req.params.id})
    if(existTask) {
       await existTask.remove();
       res.status(200).json({
           success: true,
           message: 'Task deleted successfully'
       })
    
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }


})

exports.getSingleTodo = asyncHandler(async(req, res) => {
    const existTask = await Todo.findOne({_id : req.params.id})
    if(existTask) {
       res.status(200).json({
           success: true,
           data:existTask,
           message: 'Task is fetched successfully'
       })
    
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }


})

exports.getAllTasks = asyncHandler(async (req, res) => {
    const allTasks = await Todo.find({})
    if(allTasks) {
       res.status(200).json({
           success: true,
           data: allTasks,
           message: 'All Tasks are fetched successfully'
       })
    
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Tasks are Not Found'
        })
    }


})