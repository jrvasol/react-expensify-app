import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseTotal} from '../../components/ExpenseTotal';
import expenses from '../fixtures/expenses';

test('should render ExpenseTotal with 1 value', () => {
    const wrapper = shallow(<ExpenseTotal expensesTotal={102103.2343} expensesCount={5}/>);
    expect(wrapper).toMatchSnapshot();
})