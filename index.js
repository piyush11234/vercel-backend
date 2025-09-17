const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const expenseRouter = require('./App/routes/web/expenseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.dbUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// routes
app.use('/api/expense', expenseRouter);

// ✅ Export app instead of listen (important for Vercel)
module.exports = app;
