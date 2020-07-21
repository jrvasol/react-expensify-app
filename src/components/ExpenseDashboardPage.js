import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter'

const ExpenseDashBoardPage = () => (
    <div>
        <h1>Dashboard Page</h1>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
)

export default ExpenseDashBoardPage