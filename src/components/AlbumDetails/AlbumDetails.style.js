import styled from "styled-components";
import {Artist, Title} from "../AlbumCard/AlbumCard.style";
import palette from "../../util/colorPalette";

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
    flex-wrap: wrap;
`;

export const AlbumImage = styled.div`
`;

export const Label = styled.label`
    color: ${palette.textSecondary};
`;

export const FavSection = styled.div`
    display: flex;
    padding: 10px;
`;
export const AlbumDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const AlbumData = styled.div`
  padding: 10px;
  color: ${palette.textSecondary};
`;

export const CheckBox = styled.input`
    height: 20px;
    width: 20px;
    margin-left: 4px;
`;

