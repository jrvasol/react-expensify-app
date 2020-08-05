import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses'
import { startRemoveExpense, startEditExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id }) 
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense}/>
                <button onClick={this.onRemoveExpense}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);