import React, {useEffect, useState} from "react";
import API from "../../util/api";
import {GET_ALBUMS_URL} from '../../util/constants';
import AlbumList from "../AlbumList/AlbumList";
import {Main} from "./Home.style";

const Home = () => {
    const [albums, setAlbums] = useState([]);

    const fetchAlbums = () => {
        API.get(GET_ALBUMS_URL).then((response) => {
            console.log(response);
            setAlbums(response.feed.entry);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <Main>
            <AlbumList albums={albums}/>
        </Main>
    );
}


export default Home;
