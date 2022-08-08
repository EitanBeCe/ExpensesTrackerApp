import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

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
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={!isEditing}
                timeout={300}
                classNames={{
                    enter: "",
                    enterActive: "addWindowOpen",
                    exit: "",
                    exitActive: "addWindowClose",
                }}
            >
                <button onClick={openEditExpense}>Add New Expense</button>
            </CSSTransition>

            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={isEditing}
                timeout={300}
                classNames={{
                    enter: "",
                    enterActive: "addFormOpen",
                    exit: "",
                    exitActive: "addFormClose",
                }}
            >
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    closeEditExpense={closeEditExpense}
                />
            </CSSTransition>
        </div>
    );

    // Without transitions
    // return (
    //     <div className="new-expense">
    //         {!isEditing && (
    //             <button onClick={openEditExpense}>Add New Expense</button>
    //         )}
    //         {isEditing && (
    //             <ExpenseForm
    //                 onSaveExpenseData={saveExpenseDataHandler}
    //                 closeEditExpense={closeEditExpense}
    //             />
    //         )}
    //     </div>
    // );
};

export default NewExpense;
