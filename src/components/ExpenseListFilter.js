import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'; 
import moment from 'moment';

export class ExpenseListFilters extends React.Component {
    state = {
        filterFocus: null
    }

    onDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    } 

    onFocusChange = (focus) => {
        this.setState({ filterFocus: focus })
    } 

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortByChange = (e) => { 
        if(e.target.value === 'amount') {
            this.props.sortByAmount()
        } else if(e.target.value === 'date') {
            this.props.sortByDate(); 
        } 
    }

    render() {
        return (
            <div>
                <input type="text" 
                        onChange={this.onTextChange} 
                        value={this.props.filters.text} />
                <select value={this.props.filters.sortBy} 
                        onChange={this.onSortByChange}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="filterStartDate" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="filterEndDate" // PropTypes.string.isRequired,
                    onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.filterFocus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                    showDefaultInputIcon={true}
                    regular={true}
                    />
            </div>
        )
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: value => dispatch(setTextFilter(value)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setStartDate: (date) => dispatch(setStartDate(date)),
        setEndDate: (date) => dispatch(setEndDate(date))
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);