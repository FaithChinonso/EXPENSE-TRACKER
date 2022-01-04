import Expenses from "./components/Expenses/Expense";

const App = () => {
  const expenses = [
    {
      id: "el",
      title: "Car Insurance",
      amount: 14.23,
      date: new Date(2022, 12, 29),
    },
    {
      id: "em",
      title: "Fuel",
      amount: 194.09,
      date: new Date(2022, 12, 28),
    },
    {
      id: "en",
      title: "Food",
      amount: 24.6,
      date: new Date(2022, 12, 27),
    },
    {
      id: "eo",
      title: "Clothes",
      amount: 94.7,
      date: new Date(2022, 12, 25),
    },
    {
      id: "ep",
      title: "TV",
      amount: 994.7,
      date: new Date(2022, 12, 22),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
