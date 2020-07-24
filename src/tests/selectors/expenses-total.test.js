import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    expect(getExpensesTotal([])).toEqual(0);
})

test('should correctly add up single expense', () => {
    expect(getExpensesTotal([expenses[0]])).toEqual(expenses[0].amount)
})

test('should correctly add up multiple expenses', () => {
    expect(getExpensesTotal(expenses)).toEqual(114195)
})