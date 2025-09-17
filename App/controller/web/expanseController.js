const Expense = require("../../models/web/models"); // check this path carefully!

// Insert Expense
const expenseInsert = async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    const expense = new Expense({ amount, category, date });
    const data = await expense.save();

    res.status(200).json({
      status: 1,
      message: "Expense added successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error adding expense",
      error: err.message,
    });
  }
};

// Delete Expense
const expenseDelete = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const deleted = await Expense.deleteOne({ _id: expenseId });

    res.status(200).json({
      status: 1,
      message: "Expense deleted successfully",
      id: expenseId,
      data: deleted,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error deleting expense",
      error: err.message,
    });
  }
};

// View All Expenses
const expenseView = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json({
      status: 1,
      message: "All Expenses",
      data: expenses,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error fetching expenses",
      error: err.message,
    });
  }
};

module.exports = { expenseInsert, expenseDelete, expenseView };
