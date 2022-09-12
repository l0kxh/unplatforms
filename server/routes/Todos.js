const express = require('express');
const router = express.Router();
const { Todos } = require("../models");

router.get("/", async (request, response) => {
    const todoList = await Todos.findAll();
    response.json(todoList);
});

router.post("/", async (request, response) => {
    const todo = request.body
    await Todos.create(todo);
    response.json(todo);
});

router.delete("/:id", async (request, response) => {
    let id = request.params.id;
    await Todos.destroy({ where: { id: id } });
    response.json("To do deleted");
});

module.exports = router