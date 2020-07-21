import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch, history }) => (
    <li className="expense"> 
        <Link to={'edit/' + id}>{ description }</Link>
        <p>{ amount / 100 } - { moment(createdAt).format() }</p>
    </li>
)

export default ExpenseListItem;