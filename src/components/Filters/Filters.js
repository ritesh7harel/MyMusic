import React, {useState} from 'react';
import DatePicker from "react-date-picker";
import {CheckBox, FilterContainer, FilterBox, Label, Text, Button} from './Filters.style';

const Filters = ({onFilter}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(new Date());
    const onApplyFilter = () => {
        onFilter(startDate, endDate);
    }
    return (
        <FilterContainer>
            <Text>Filters</Text>
            <FilterBox>
                <Label>Start Date</Label>
                <DatePicker value={startDate} onChange={(date) => setStartDate(date)}/>
            </FilterBox>
            <FilterBox>
                <Label>End Date</Label>
                <DatePicker value={endDate} onChange={(date) => setEndDate(date)}/>
            </FilterBox>
            <Button onClick={onApplyFilter}>Apply</Button>
            {/*<FilterBox>*/}
            {/*    <Label htmlFor="checkbox2">Category</Label>*/}
            {/*    <CheckBox type="checkbox" name="checkbox_category" id="checkbox_category" onChange={onFilter}/>*/}
            {/*</FilterBox>*/}
        </FilterContainer>
    );
};

export default Filters;
