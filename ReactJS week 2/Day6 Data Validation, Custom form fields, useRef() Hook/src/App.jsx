import { useState } from 'react'
import './App.css'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseTable from '../components/ExpenseTable'
import exspenseData from '../expenseData'
function App() {
  const [expenses, setExpenses] = useState(exspenseData);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses = {setExpenses} />
        <ExpenseTable expenses = {expenses} />
      </div>
    </main>
  )
}

export default App 
