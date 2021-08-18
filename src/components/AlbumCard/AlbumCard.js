import React from "react";
import {CardContainer, Image, Title, Artist, ImageNavigator} from "./AlbumCard.style";

const AlbumCard = ({album}) => {
    return (
        <>
            <CardContainer>
                <ImageNavigator to={{
                    pathname: `/album`,
                    data: album,
                }}>
                    <Image src={album["im:image"][2].label} alt="album image" loading="lazy"/>
                </ImageNavigator>
                <Title className="title" href={album.id.label}>
                    {album["im:name"].label}
                </Title>
                <Artist className="artist" href={album["im:artist"].attributes?.href}>
                    {album["im:artist"].label}
                </Artist>
            </CardContainer>
        </>

    );
};

export default AlbumCard;
