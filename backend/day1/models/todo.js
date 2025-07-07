import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },description: {
        type: String,
        required: true
    }
})

const todo = mongoose.model('todo', todoSchema)
export default todo;