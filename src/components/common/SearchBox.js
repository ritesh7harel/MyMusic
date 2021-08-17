import React from 'react';
import {SearchInput, SearchContainer} from './SearchBox.style';

const SearchBox = ({onSearch}) => {
    return (
        <SearchContainer>
            <SearchInput type="text" name="search" id="search" onChange={onSearch} placeholder="Search..."
                         autocomplete="off"/>
        </SearchContainer>
    );
};

export default SearchBox;
