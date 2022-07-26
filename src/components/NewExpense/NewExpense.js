import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenceData) => {
    const expenseData = {
      ...enteredExpenceData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

	const openEditExpense = () => {
    setIsEditing(true);
  };
  const closeEditExpense = (formIsClicked) => {
    setIsEditing(formIsClicked);
  };

  if (isEditing === false) {
    return (
      <div className="new-expense">
        <button onClick={openEditExpense}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
										closeEditExpense={closeEditExpense}/>
    </div>
  );
};

export default NewExpense;
