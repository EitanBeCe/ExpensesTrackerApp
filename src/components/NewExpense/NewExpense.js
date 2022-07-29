import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenceData) => {
        const expenseData = {
            ...enteredExpenceData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
        setIsEditing(false);
    };

    const openEditExpense = () => {
        setIsEditing(true);
    };
    const closeEditExpense = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={openEditExpense}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    closeEditExpense={closeEditExpense}
                />
            )}
        </div>
    );
};

export default NewExpense;
