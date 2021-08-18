import React, {useEffect, useState} from "react";
import API from "../../util/api";
import {GET_ALBUMS_URL} from '../../util/constants';
import AlbumList from "../AlbumList/AlbumList";
import {Main, Header, AppWrapper} from "./Home.style";
import SearchBox from "../common/SearchBox";
import Filters from "../Filters/Filters";
import Loader from "../common/Loader";
import {Link} from "react-router-dom";

const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [currentFilters, setCurrentFilters] = useState(null);
    const [inputText, setInputText] = useState('');
    const [originalAlbums, setOriginalAlbums] = useState([]);

    const extractCategories = (albums) => {
        let albumCategories = [];
        let map = {};
        albums.forEach((item) => {
            if (!map[item.category.attributes.label]) {
                map[item.category.attributes.label] = 1;
                albumCategories.push(item.category.attributes.label);
            }
        });
        setCategories(albumCategories);
    }

    const fetchAlbums = () => {
        setLoading(true);
        API.get(GET_ALBUMS_URL).then((response) => {
            setAlbums(response.feed.entry);
            setOriginalAlbums(response.feed.entry);
            setLoading(false);
            extractCategories(response.feed.entry);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        });
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const filterAlbums = () => {
        let filteredAlbums = originalAlbums.filter((item) => {
            return item["im:name"].label.toLowerCase().includes(inputText) || item["im:artist"].label.toLowerCase().includes(inputText);
        });

        if (currentFilters) {
            const {startDate, endDate, selectedCategory} = currentFilters;
            filteredAlbums = filteredAlbums.filter((item) => {
                const releaseDate = new Date(item["im:releaseDate"].label);
                if (startDate && selectedCategory !== 'none') {
                    return releaseDate >= startDate && releaseDate <= endDate && selectedCategory === item.category.attributes.label;
                } else if (startDate) {
                    return releaseDate >= startDate && releaseDate <= endDate;
                } else if (selectedCategory !== 'none') {
                    return selectedCategory === item.category.attributes.label;
                }
                return true
            });
        }

        setAlbums(filteredAlbums);
    }


    useEffect(() => {
        filterAlbums();
    }, [inputText, currentFilters]);

    const onSearch = (e) => {
        const searchedText = e.target.value.toLowerCase();
        setInputText(searchedText);
    };

    const onFilter = (startDate, endDate, selectedCategory) => {
        endDate = endDate || new Date();
        setCurrentFilters({startDate, endDate, selectedCategory});
    };

    return (
        <AppWrapper>
            <Header>
                <SearchBox onSearch={onSearch}/>
                <Link to="/favourites">my favourites</Link>
            </Header>
            <Main>
                <Filters onFilter={onFilter} categories={categories}/>
                {loading ? <Loader/> : <AlbumList albums={albums}/>}
            </Main>
        </AppWrapper>
    );
}


export default Home;
