import React from 'react';
import {useLocation} from 'react-router-dom';
import {
    AlbumDetailsContainer,
    AlbumImage,
    AlbumDescription,
    AlbumData,
    AlbumTitle,
    AlbumArtist,
} from './AlbumDetails.style';
import {Artist, Image, Title} from "../AlbumCard/AlbumCard.style";

const AlbumDetails = () => {
    const {data: album} = useLocation();
    console.log("details", album);
    return <AlbumDetailsContainer>
        <AlbumImage>
            <Image src={album["im:image"][2].label} alt="album image"/>
        </AlbumImage>
        <AlbumDescription>
            <AlbumTitle href={album.id.label}>
                {album["im:name"].label}
            </AlbumTitle>
            <AlbumArtist href={album["im:artist"].attributes?.href}>
                Artist: {album["im:artist"].label}
            </AlbumArtist>
            <AlbumData>Category: {album.category.attributes.label}</AlbumData>
            <AlbumData>Price: {album["im:price"].label}</AlbumData>
            <AlbumData>Release Date: {album["im:releaseDate"].attributes.label}</AlbumData>
            <AlbumData>{album["rights"].label}</AlbumData>
        </AlbumDescription>
    </AlbumDetailsContainer>
};

export default AlbumDetails;
