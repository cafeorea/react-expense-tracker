import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 140,
      date: new Date(2021, 12, 28),
    },
    {
      id: "e2",
      title: "Rent",
      amount: 600,
      date: new Date(2022, 4, 19),
    },
    {
      id: "e3",
      title: "Macbook Pro",
      amount: 1200,
      date: new Date(2022, 6, 12),
    },
    {
      id: "e4",
      title: "Return Flight Tickets (Mexico)",
      amount: 850,
      date: new Date(2022, 7, 20),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
