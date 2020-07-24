import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter'
import ExpenseTotal from './ExpenseTotal';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseTotal/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
)

export default ExpenseDashBoardPage