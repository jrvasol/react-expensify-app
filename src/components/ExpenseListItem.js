import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch, history }) => (
    <li className="expense"> 
        <Link to={'edit/' + id}>{ description }</Link>
        <p>{ numeral(amount / 100).format('$0,0.00') } - { moment(createdAt).format('MMMM Do, YYYY') }</p>
    </li>
)

export default ExpenseListItem;