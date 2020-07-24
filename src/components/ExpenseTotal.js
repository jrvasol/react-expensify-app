import React from 'react';
import {connect} from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses'
import numeral from 'numeral';


export const ExpenseTotal = (props) => (
    <div>
        <h1>Expense Total: {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
        <p>Total Count: { props.expensesCount }</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters)),
        expensesCount: getVisibleExpenses(state.expenses, state.filters).length
    }
}

export default connect(mapStateToProps)(ExpenseTotal);