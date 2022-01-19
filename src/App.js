import React, { useState } from "react";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
let storedExpenses = [];

const storage = localStorage.getItem("expense");

if (storage) storedExpenses = JSON.parse(storage);
storedExpenses.map((exp) => (exp.date = new Date(exp.date)));

const App = () => {
  const [expenses, setExpenses] = useState(storedExpenses);
  // const [storedExpenses, setStoredExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const persistExpenseHandler = function (Expense) {
    localStorage.setItem("expense", JSON.stringify(Expense));
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />

      <Expenses items={expenses} onPersistExpense={persistExpenseHandler} />
    </div>
  );
};

export default App;
