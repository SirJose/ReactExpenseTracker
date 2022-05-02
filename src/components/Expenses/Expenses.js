import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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
                <ExpensesFilter 
                    selectedYear={selectedYear} 
                    onSelectedYear={selectedYearHanlder} 
                />
                <ExpensesChart expenses={selectedExpenses} />
                <ExpensesList items={selectedExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;