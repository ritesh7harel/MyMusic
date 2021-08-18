import React, {useContext} from 'react';
import AppContext from "../common/state/appContext";
import AlbumList from "../AlbumList/AlbumList";
import {Heading} from './FavouriteAlbums.style';

const FavouriteAlbums = () => {
    const [{favouriteAlbums}] = useContext(AppContext);
    return (
        <>
            <Heading>My Favourite Albums</Heading>
            <AlbumList albums={favouriteAlbums}/>
        </>)
};

export default FavouriteAlbums;
