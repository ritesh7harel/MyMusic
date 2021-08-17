import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 180px;
    font-size: 14px;
    
    :hover{
        transform: scale(1.02);
    }
`;

export const Image = styled.img`
    border-radius: 5px;
`

export const ImageNavigator = styled.a`
    cursor: pointer;
`;

export const Title = styled.a`
    cursor: pointer;
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
    cursor: pointer;
    color: #999999;
    text-decoration: none;
    :visited, :hover, :active {
      color: #999999;
    }
    
    :hover{
      text-decoration: underline;
    }
`;

