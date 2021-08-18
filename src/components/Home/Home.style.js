import styled from "styled-components";
import palette from "../../util/colorPalette";

export const AppWrapper = styled.div`
  padding: 20px;
`;

export const Main = styled.section`
  display: flex;
  justify-content: center;
  color: ${palette.textPrimary};;
  margin: 0;
  
  @media (max-width: 420px) {
       flex-wrap: wrap;
    }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
