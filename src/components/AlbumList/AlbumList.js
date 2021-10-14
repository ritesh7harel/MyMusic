import React, {useEffect} from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import {Albums, AlbumsListItem} from "./AlbumList.style";

const AlbumList = ({albums}) => {
    useEffect(() => {
        const images = Array.from(document.querySelectorAll(".lazy-image"));
        if ("IntersectionObserver" in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;

                        image.src = image.dataset.src;
                        image.onload = () => image.previousElementSibling.remove();

                        imageObserver.unobserve(image);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }, []);

    return (
        <Albums>
            {albums.length > 0 && albums.map((item) =>
                <AlbumsListItem key={item.id.attributes["im:id"]}><AlbumCard album={item}/></AlbumsListItem>)}
        </Albums>
    );
}

export default AlbumList;
