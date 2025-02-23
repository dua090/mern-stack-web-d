import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { APIUrl, handleError, handleSuccess } from '../utils'
import { ToastContainer, toast } from 'react-toastify'
import ExpensesTable from './ExpensesTable'
import ExpenseTarackerform from './ExpenseTarackerform'
import { data } from 'autoprefixer'
import ExpenseDetails from './ExpenseDetails'

function Home () {
  const [loggedInUser, setLoggedInUser] = useState('')
  const [expenses, setExpenses] = useState([])
  const [ExpenseAmt, setExpenseAMt] = useState(0)
  const [incomeAMt, setIncomeAMt] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  useEffect(() => {
    const amounts = expenses.map(item => item.amount)
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
    const exp =
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    setIncomeAMt(income)
    setExpenseAMt(exp)
  }, [expenses])
  const handleLogout = e => {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    handleSuccess('User Loggedout')
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }

  const fetchExpenses = async () => {
    try {
      const url = `${APIUrl}/expenses`
      const headers = {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
      const response = await fetch(url, headers)
      if (response.status === 403) {
        navigate('/login')
        return
      }
      const result = await response.json()
      console.log(result.data)
      setExpenses(result.data)
    } catch (err) {
      handleError(err)
    }
  }

  const addExpenses = async data => {
    try {
      const url = `${APIUrl}/expenses`
      const headers = {
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      }
      const response = await fetch(url, headers)

      if (response.status === 403) {
        localStorage.removeItem('token')
        navigate('/login')
        return
      }

      const result = await response.json()
      console.log('API Response:', result)

      if (result.success) {
        console.log('Calling handleSuccess')
        handleSuccess(result.message)
      }

      setTimeout(() => {
        setExpenses(result.data)
      }, 500) // Delay re-rendering
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    fetchExpenses()
  }, [])
  const handleDeleteExpense = async expenseId => {
    try {
      const url = `${APIUrl}/expenses${expenseId} `
      const headers = {
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify(data)
      }
      const response = await fetch(url, headers)

      if (response.status === 403) {
        localStorage.removeItem('token')
        navigate('/login')
        return
      }

      const result = await response.json()
      console.log('API Response:', result)

      if (result.success) {
        console.log('Calling handleSuccess')
        handleSuccess(result.message)
      }

      setTimeout(() => {
        setExpenses(result.data)
      }, 500) // Delay re-rendering
    } catch (err) {
      handleError(err)
    }
  }
  return (
    <div>
      <div className='user-section'>
        <h1>Welcome {loggedInUser}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ExpenseDetails incomeAMt={incomeAMt} ExpenseAmt={ExpenseAmt} />
      <ExpenseTarackerform addExpenses={addExpenses} />
      <ExpensesTable
        expenses={expenses}
        handleDeleteExpense={handleDeleteExpense}
      />
      <ToastContainer />
    </div>
  )
}

export default Home
