import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment'

test('Setting Text Filter', () => {
    expect(setTextFilter('test')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });

    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('should sort start date by given value', () => {
    const startDateDefault = moment().startOf('month');

    expect(setStartDate(startDateDefault)).toEqual({
        type: 'SET_START_DATE',
        startDate: startDateDefault
    })
});

test('should sort end date by given value', () => {
    const endDateDefault = moment().endOf('month');

    expect(setEndDate(endDateDefault)).toEqual({
        type: 'SET_END_DATE',
        endDate: endDateDefault
    })
});

test('should sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})