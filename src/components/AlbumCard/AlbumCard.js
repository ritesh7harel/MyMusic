import React, { memo } from "react";
import Placeholder from "../../assets/placeholder.png";
import {
  CardContainer,
  Image,
  Title,
  Artist,
  ImageNavigator
} from "./AlbumCard.style";

const AlbumCard = ({ album }) => {
  return (
    <>
      <CardContainer>
        <ImageNavigator
          to={{
            pathname: `/album`,
            data: album
          }}
        >
          {/* <Image
            src={album["im:image"][2].label}
            alt="album image"
            loading="lazy"
          /> */}
          {/* <Image
            srcset={`${album["im:image"][0].label}+" 480w "+${album["im:image"][1].label}+" 700w "+${album["im:image"][2].label}+" 1200w""`}
            sizes="(max-width: 1500px) 480px,
            800px 1200px"
            alt="Elva dressed as a fairy"
            src={album["im:image"][0].label}
          /> */}
          <picture>
            {/* <source
              media="(max-width: 399px)"
              srcset={album["im:image"][0].label}
            />
            <source
              media="(max-width: 768px and min-width: 400px)"
              srcset={album["im:image"][1].label}
            />
            <source
              media="(min-width: 1100px)"
              srcset={album["im:image"][2].label}
            /> */}
            <img
              data-src={album["im:image"][2].label}
              alt="Chris standing up holding his daughter Elva"
              className="lazy-image"
              src={Placeholder}
            />
            <img
              data-src={album["im:image"][2].label}
              alt="Chris standing up holding his daughter Elva"
              className="lazy-image"
              src={Placeholder}
            />
          </picture>
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

export default memo(AlbumCard);
