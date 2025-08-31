let express = require('express');
const { expenseInsert, expenseDelete, expenseView } = require('../../controller/web/expanseController');
let expenseRouter = express.Router();

expenseRouter.post('/insert',expenseInsert);

expenseRouter.delete('/delete/:id',expenseDelete);

expenseRouter.get('/view',expenseView);


module.exports=expenseRouter;