import "./Expenses.css";
import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        currentlySelectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
