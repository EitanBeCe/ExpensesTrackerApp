import "./Expenses.css";
import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses({ expenses, onRemoveExpense }) {
    const [filteredYear, setFilteredYear] = useState("2021");

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

            <ExpensesChart expenses={filteredExpenses} />

            <ExpensesList
                filteredExpenses={filteredExpenses}
                onRemoveExpense={onRemoveExpense}
            />
        </Card>
    );
}

export default Expenses;
