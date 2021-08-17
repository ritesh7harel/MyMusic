import React, {useEffect, useState} from "react";
import API from "../../util/api";
import {GET_ALBUMS_URL} from '../../util/constants';
import Card from "../common/Card";

const Albums = () => {
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
        <div>
            {albums.length > 0 && albums.map((item) => <Card album={item}/>)}
        </div>
    );
}
;

export default Albums;
