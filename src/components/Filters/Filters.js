import React from 'react';
import {CheckBox, FilterContainer, FilterBox, Label, Text} from './Filters.style';

const Filters = ({onFilter}) => {
    return (
        <FilterContainer>
            <Text>Filters</Text>
            <FilterBox>
                <Label htmlFor="checkbox1">Date</Label>
                <CheckBox type="checkbox" name="checkbox_date" id="checkbox_date" onChange={onFilter}/>
            </FilterBox>
            <FilterBox>
                <Label htmlFor="checkbox2">Category</Label>
                <CheckBox type="checkbox" name="checkbox_category" id="checkbox_category" onChange={onFilter}/>
            </FilterBox>
        </FilterContainer>
    );
};

export default Filters;
