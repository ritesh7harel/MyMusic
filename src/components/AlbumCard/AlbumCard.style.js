import styled from "styled-components";
import {Link} from 'react-router-dom';
import palette from "../../util/colorPalette";

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
`;

export const ImageNavigator = styled(Link)`
    cursor: pointer;
`;

export const Title = styled.a`
    cursor: pointer;
    padding: 5px 0;
    color: ${palette.textPrimary};
    text-decoration: none;
    :visited, :hover, :active {
      color: ${palette.textPrimary};
    }
    
    :hover{
      text-decoration: underline;
    }
`;

export const Artist = styled.a`
    cursor: pointer;
    color: ${palette.textSecondary};
    text-decoration: none;
    :visited, :hover, :active {
      color: ${palette.textSecondary};
    }
    
    :hover{
      text-decoration: underline;
    }
`;

