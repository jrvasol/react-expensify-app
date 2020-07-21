import filtersReducer from '../../reducers/filters'

test('set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })

    expect(state.text).toBe('test');
})

test('set sort by amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    })

    expect(state.sortBy).toBe('amount');
})

test('set sort by date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' })

    expect(state.sortBy).toBe('date');
})

test('set filter by start date', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: 'June 6, 6666'})

    expect(state.startDate).toBe('June 6, 6666');
})

test('set filter by end date', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: 'September 9, 9999'})

    expect(state.endDate).toBe('September 9, 9999')
})