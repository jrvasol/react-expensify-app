import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                
                <p>No expenses available</p>

            ) : (
                <ul>
                    {
                        props.expenses.map((expense) => {
                            return <ExpenseListItem {...expense} key={expense.id} />
                        })
                    } 
                </ul>
            )
        }
    </div>
); 

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);