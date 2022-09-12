const express = require('express');
const router = express.Router();
const { Done } = require("../models");

router.get("/", async (request, response) => {
    const listOfDone = await Done.findAll();
    response.json(listOfDone);
});

router.post("/", async (request, response) => {
    const done = request.body
    await Done.create(done);
    response.json(done);
});

router.delete("/:id", async (request, response) => {
    let id = request.params.id;
    await Done.destroy({ where: { id: id } });
    response.json("Done deleted");
});

module.exports = router