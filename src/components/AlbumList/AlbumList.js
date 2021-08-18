import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import {Albums, AlbumsListItem} from "./AlbumList.style";

const AlbumList = ({albums}) => {
    return (
        <Albums>
            {albums.length > 0 && albums.map((item) =>
                <AlbumsListItem key={item.id.attributes["im:id"]}><AlbumCard album={item}/></AlbumsListItem>)}
        </Albums>
    );
}

export default AlbumList;
