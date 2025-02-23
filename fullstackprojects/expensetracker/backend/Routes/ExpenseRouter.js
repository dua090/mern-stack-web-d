const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/ExpenseController');

const router = require('express').Router();


//fetch all the expenses of user based on userid 
router.get('/',fetchExpenses)
//add expense
router.post('/',addExpenses)
//delete
router.delete('/:expenseID',deleteExpenses)


module.exports=router;


//29.43