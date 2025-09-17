const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const expenseRouter = require("./App/routes/web/expenseRoutes");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "https://expense-tracker-daily.vercel.app", // frontend URL
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
}));
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ Routes
app.use("/api/expense", expenseRouter);

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Backend is live and connected to MongoDB");
});

// ✅ Export app for Vercel
module.exports = app;

// ✅ Local run (only when NODE_ENV=development)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.port || 8080;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}
