const Todo = require("../../models/todo");
const express = require("express");
const app = express();

let dbTodo = {
  getAll: async () => {
    try {
      const resultTodo = await Todo.find();

      if (!resultTodo) {
        throw new Error("No lists in the database");
      }
      return resultTodo;
    } catch (error) {
      return error.message;
    }
  },

  getOne: async () => {
    try {
      let todo = await Todo.findOne({ _id: id });

      if (!todo) {
        throw new Error("Not found in the database...");
      }
      return todo;
    } catch (error) {
      return error.message;
    }
  },
};
