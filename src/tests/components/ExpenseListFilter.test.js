import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilter';
import {filters, altFilters} from '../fixtures/filters';

let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn(); 
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilters
        filters={filters} 
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}/>);
})

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilter correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should filter text with value', () => {
    wrapper.find('input').simulate('change', {target: {value: filters.text }});
    expect(setTextFilter).toHaveBeenLastCalledWith(filters.text);
})
 
test('should filter sort by amount', () => {
    wrapper.find('select').simulate('change', { target: {value: 'amount'}});
    expect(sortByAmount).toHaveBeenCalled();
})

test('should filter sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', { target: {value: 'date'}});
    expect(sortByDate).toHaveBeenCalled();
})

test('should handle date changes', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: filters.startDate, 
        endDate: filters.endDate
    })

    expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate);
})

test('should handle date focus changes', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')({focused: true});
    expect(wrapper.state('filterFocus')).toBeTruthy();
})