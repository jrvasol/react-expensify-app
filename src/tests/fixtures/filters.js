import moment from 'moment';

export const filters = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
}

export const altFilters = {
    text: 'i know michelle when michelle was still michael',
    sortBy: 'amount', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}