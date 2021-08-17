import React from "react";
import Card from "../common/Card";
import {Albums, AlbumsListItem} from "./AlbumList.style";

const AlbumList = ({albums}) => {
    return (
        <Albums>
            {albums.length > 0 && albums.map((item) =>
                <AlbumsListItem key={item.id.attributes["im:id"]}><Card album={item}/></AlbumsListItem>)}
        </Albums>
    );
}

export default AlbumList;
