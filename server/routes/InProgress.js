const express = require('express');
const router = express.Router();
const { InProgress } = require("../models");

router.get("/", async (request, response) => {
    const progressList = await InProgress.findAll();
    response.json(progressList);
});

router.post("/", async (request, response) => {
    const inprog = request.body
    await InProgress.create(inprog);
    response.json(inprog);
});

router.delete("/:id", async (request, response) => {
    let id = request.params.id;
    await InProgress.destroy({ where: { id: id } });
    response.json("InProgress deleted");
});

module.exports = router