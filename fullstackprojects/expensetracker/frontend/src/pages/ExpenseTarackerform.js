import React, { useState } from 'react'
import { handleError } from '../utils';

const ExpenseTarackerform = ({addExpenses }) => {
    const [expenseInfo,setExpenseInfo]=useState({text:'',amount:''});
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyexpenseInfo = { ...expenseInfo };
        copyexpenseInfo[name] = value;
        setExpenseInfo(copyexpenseInfo);
    }
    const handleExpense=(e)=>{
        e.preventDefault();
        console.log(expenseInfo);
        const {text,amount}=expenseInfo;
        if(!text||!amount){
            handleError('Please fill all fields');
            return;
        }
        setTimeout(()=>{
            setExpenseInfo({text:'',amount:''})
        },1000)
        
        addExpenses(expenseInfo);

    }
  return (
    <div className='container'>
                <h1>Expense tracker</h1>
                <form onSubmit={handleExpense}>
                    <div>
                        <label htmlFor='email'>Expense description</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='text'
                            placeholder='Enter your expense description...'
                            value={expenseInfo.text}
                        />
                    </div>
                    <div>
                        <label htmlFor='amount'>amount</label>
                        <input
                            onChange={handleChange}
                            type='number'
                            name='amount'
                            placeholder='Enter your amount expensein(-) income 0n (+)...'
                            value={expenseInfo.amount}
                        />
                    </div>
                    <button type='submit'>Addexpense</button>
                    
                </form>
                
            </div>
  )
}

export default ExpenseTarackerform