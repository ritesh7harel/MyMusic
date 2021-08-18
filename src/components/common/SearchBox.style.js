import styled from "styled-components";

export const SearchInput = styled.input`
    height: 30px;
    width: 330px;
    background: white;
    color: black;
    outline: none;
    border-radius: 10px;
    
    @media (max-width: 420px) {
        width: 200px;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`
