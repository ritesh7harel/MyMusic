import React, {useEffect, useState} from "react";
import API from "../../util/api";
import {GET_ALBUMS_URL} from '../../util/constants';
import AlbumList from "../AlbumList/AlbumList";
import {Main, Header, AppWrapper} from "./Home.style";
import SearchBox from "../common/SearchBox";
import Filters from "../Filters/Filters";

const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [originalAlbums, setOriginalAlbums] = useState([]);

    const fetchAlbums = () => {
        API.get(GET_ALBUMS_URL).then((response) => {
            console.log(response);
            setAlbums(response.feed.entry);
            setOriginalAlbums(response.feed.entry);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const onSearch = (e) => {
        const inputText = e.target.value.toLowerCase();
        const filteredAlbums = originalAlbums.filter((item) => {
            return item["im:name"].label.toLowerCase().includes(inputText) || item["im:artist"].label.toLowerCase().includes(inputText);
        });
        setAlbums(filteredAlbums);
    };

    const onFilter = (e) => {
        console.log(e.target.id);
        // const inputText = e.target.value.toLowerCase();
        // const filteredAlbums = originalAlbums.filter((item) => {
        //     return item["im:name"].label.toLowerCase().includes(inputText) || item["im:artist"].label.toLowerCase().includes(inputText);
        // });
        // setAlbums(filteredAlbums);
    };

    return (
        <AppWrapper>
            <Header>
                <SearchBox onSearch={onSearch}/>
            </Header>
            <Main>
                <Filters onFilter={onFilter}/>
                <AlbumList albums={albums}/>
            </Main>
            <footer>

            </footer>
        </AppWrapper>
    );
}


export default Home;
