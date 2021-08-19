import React, {useState} from 'react';
import DatePicker from "react-date-picker";
import {HtmlLabel, FilterContainer, FilterBox, Label, Text, Button, Select} from './Filters.style';

const Filters = ({onFilter, categories}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState('none');
    const onApplyFilter = () => {
        onFilter(startDate, endDate, selectedCategory);
    };
    return (
        <FilterContainer>
            <Text>Filters</Text>
            <Label>Select Release Date Range</Label>
            <FilterBox>
                <Label>Start Date</Label>
                <DatePicker value={startDate} onChange={(date) => setStartDate(date)}/>
            </FilterBox>
            <FilterBox>
                <Label>End Date</Label>
                <DatePicker value={endDate} onChange={(date) => setEndDate(date)}/>
            </FilterBox>
            <HtmlLabel htmlFor="category_filter">Select Category</HtmlLabel>
            <Select name="category_filter" id="category_filter" onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="none" key="none">none</option>
                {categories.map((category) =>
                    <option value={category} key={category}>{category}</option>
                )}
            </Select>
            <Button onClick={onApplyFilter}>Apply</Button>
        </FilterContainer>
    );
};

export default Filters;
