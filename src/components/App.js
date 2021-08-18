import React from "react";
import {
    Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "./Home/Home";
import AlbumDetails from './AlbumDetails/AlbumDetails';
import FavouriteAlbums from "./FavouriteAlbums/FavouriteAlbums";
import history from '../util/history';
import "./App.css";

const App = () => {
    return <Router history={history}>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/album">
                <AlbumDetails/>
            </Route>
            <Route exact path="/favourites">
                <FavouriteAlbums/>
            </Route>
            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    </Router>
};

export default App;
