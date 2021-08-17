import React from "react";
import {CardContainer, Image, Title, Artist, ImageNavigator} from "./Card.style";

const Card = ({album}) => {
    return (
        <CardContainer>
            <ImageNavigator href={album.link.attributes.href}>
                <Image src={album["im:image"][2].label} alt="album image"/>
            </ImageNavigator>
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
