import React, { useState } from "react";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "el",
    title: "Car Insurance",
    amount: 14.23,
    date: new Date(2023, 12, 29),
  },
  {
    id: "em",
    title: "Fuel",
    amount: 194.09,
    date: new Date(2020, 1, 28),
  },
  {
    id: "en",
    title: "Food",
    amount: 24.6,
    date: new Date(2021, 12, 27),
  },
  {
    id: "eo",
    title: "Clothes",
    amount: 94.7,
    date: new Date(2022, 6, 25),
  },
  {
    id: "ep",
    title: "TV",
    amount: 994.7,
    date: new Date(2022, 10, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
