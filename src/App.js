import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 140,
      date: new Date(2022, 2, 28),
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
