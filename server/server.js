const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const todoRouter = require("./routes/Todos");
app.use("/todos", todoRouter);

const inprogRouter = require("./routes/InProgress");
app.use("/inprogress", inprogRouter);

const doneRouter = require("./routes/Done");
app.use("/done", doneRouter);


db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log("server is running on 3306")
    });
});
