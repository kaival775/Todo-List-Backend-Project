const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todolist');

const todoSchema = mongoose.Schema({
  todo: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  completed:{
    type: Boolean,
    default: false,
  },
  due: {
    type: Date,
  },
});

module.exports = mongoose.model('todo', todoSchema);