import React from "react";
import {CardContainer, Image, Title, Artist} from "./Card.style";

const Card = ({album}) => {
    return (
        <CardContainer>
            <Image src={album["im:image"][2].label} alt="album image"/>
            <Title className="title" href={album.id.label}>
                {album["im:name"].label}
            </Title>
            <Artist className="artist" href={album["im:artist"].attributes?.href}>
                {album["im:artist"].label}
            </Artist>
        </CardContainer>
    );
};

export default Card;
