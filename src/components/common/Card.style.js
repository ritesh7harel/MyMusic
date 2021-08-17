import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 180px;
    font-size: 14px;
    cursor: pointer;
`;

export const Image = styled.img`
    border-radius: 5px;
`;

export const Title = styled.a`
    padding: 5px 0;
    color: white;
    text-decoration: none;
    :visited, :hover, :active {
      color: white;
    }
    
    :hover{
      text-decoration: underline;
    }

`;

export const Artist = styled.a`
    color: #999999;
    text-decoration: none;
    :visited, :hover, :active {
      color: #999999;
    }
    
    :hover{
      text-decoration: underline;
    }
`;

