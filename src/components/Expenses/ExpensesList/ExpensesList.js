import "./ExpensesList.css";
import ExpenseItem from "./ExpensesItem/ExpenseItem";

const ExpensesList = ({ filteredExpenses, onRemoveExpense }) => {
    if (!filteredExpenses.length) {
        return (
            <h2 className="expenses-list__fallback">
                No expeses in this period
            </h2>
        );
    }

    return (
        <ul className="expenses-list">
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onRemoveExpense={onRemoveExpense.bind(null, expense.id)}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
