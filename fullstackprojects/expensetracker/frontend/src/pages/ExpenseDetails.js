import React from 'react'

const ExpenseDetails = ({incomeAMt,ExpenseAmt}) => {
  return (
    <div>
       <div>
        balance is {incomeAMt - ExpenseAmt}

       </div>
       <div className="amounts-container">
                Income
                <span className="income-amount">₹{incomeAMt}</span>
                Expense
                <span className="expense-amount">₹{ExpenseAmt}</span>
            </div>
    </div>
  )
}

export default ExpenseDetails