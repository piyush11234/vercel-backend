const serverless = require('serverless-http');
const app = require('./app');

app.get("/", (req, res) => {
    res.send("✅ Backend is live and connected to MongoDB");
});


module.exports = serverless(app);
