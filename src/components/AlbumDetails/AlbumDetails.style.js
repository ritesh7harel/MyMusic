import styled from "styled-components";
import {Artist, Image, Title} from "../common/Card.style";


export const AlbumTitle = styled(Title)`
    font-size: 22px;
    padding: 10px;
`;

export const AlbumArtist = styled(Artist)`
    padding: 10px
`;

export const AlbumDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`;
export const AlbumImage = styled.div`
`;
export const AlbumDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const AlbumData = styled.div`
  padding: 10px;
  color: #999999;
`;
