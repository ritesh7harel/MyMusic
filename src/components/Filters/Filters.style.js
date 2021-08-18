import styled from "styled-components";
import palette from "../../util/colorPalette";

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const FilterBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 10px 0;
`;

export const Label = styled.div`
   padding: 10px;
`;

export const HtmlLabel = styled.label`
   padding: 10px;
   margin-top: 20px;
   border-top: 1px solid ${palette.textPrimary};;
`;

export const Select = styled.select`
   height: 30px;
   font-size: 16px;
`;

export const Text = styled.div`
    font-size: 18px;
    border-bottom: 1px solid ${palette.textPrimary};;
    margin-bottom: 15px;
    padding-bottom: 15px;
`;

export const Button = styled.button`
   background: ${palette.textPrimary};;
   height: 30px;
   color: black;
   margin: 15px 0;
`;

