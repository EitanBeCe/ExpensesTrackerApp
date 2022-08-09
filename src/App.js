import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { DEFAULT_EXPENSES } from "./helpers/defaultDataExpenses";

function App() {
    const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    const removeExpenseHandler = (id) => {
        setExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.id !== id)
        );
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses
                expenses={expenses}
                onRemoveExpense={removeExpenseHandler}
            />
        </div>
    );
}

export default App;
