import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {
    AlbumDetailsContainer,
    AlbumImage,
    AlbumDescription,
    AlbumData,
    AlbumTitle,
    AlbumArtist,
    CheckBox,
    FavSection,
    Label
} from './AlbumDetails.style';
import {Image} from "../AlbumCard/AlbumCard.style";
import AppContext from "../common/state/appContext";

const AlbumDetails = () => {
    const {data: album} = useLocation();
    const [isFav, setIsFav] = useState(false);
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        state.favouriteAlbums.forEach((item) => {
            if (item.id.attributes["im:id"] === album.id.attributes["im:id"]) {
                setIsFav(true);
            }
        })
    }, [])

    const onMark = () => {
        if (!isFav) {
            dispatch({type: "UPDATE", payload: [...state.favouriteAlbums, album]});
        } else {
            const filtered = state.favouriteAlbums.filter((item) => item.id.attributes["im:id"] !== album.id.attributes["im:id"])
            dispatch({type: "UPDATE", payload: filtered});
        }
        setIsFav(!isFav);
    }

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
            <FavSection>
                <Label htmlFor="favourite">Mark Favourite</Label>
                <CheckBox type="checkbox" name="favourite" id="favourite" onChange={onMark} checked={isFav}/>
            </FavSection>
        </AlbumDescription>
    </AlbumDetailsContainer>
};

export default AlbumDetails;
