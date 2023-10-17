import React, {useState} from "react";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'


function DatePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);

    const handleDatesChange = ({ startDate, endDate}) => {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    return (
        <div>
            <DateRangePicker        
                startDate={startDate}        
                startDateId="date_picker_start_date_id"
                endDate={endDate}        
                endDateId="date_picker_end_date_id"        
                onDatesChange={handleDatesChange}       
                focusedInput={focusedInput}        
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                keepOpenOnDateSelect={true}
            />
        </div>
    )
}

export default DatePicker;
