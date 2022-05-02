import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

    const expenses = props.items;
    const [selectedExpenses, setSelectedExpenses] = useState(props.items);
    const [selectedYear, setSelectedYear] = useState('2020');

    const selectedYearHanlder = (selectedYear) => {
        setSelectedYear(selectedYear);

        setSelectedExpenses(expenses.filter((expense, i) => expense.date.getFullYear().toString() === selectedYear));
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={selectedYear} onSelectedYear={selectedYearHanlder} />
                {selectedExpenses.map((expense, i) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;