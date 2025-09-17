const express = require("express");
const {
  expenseInsert,
  expenseDelete,
  expenseView,
} = require("../../controller/web/expenseController");

const expenseRouter = express.Router();

expenseRouter.post("/insert", expenseInsert);
expenseRouter.delete("/delete/:id", expenseDelete);
expenseRouter.get("/view", expenseView);

module.exports = expenseRouter;
