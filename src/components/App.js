import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import history from '../util/history';
import "./App.css"; 

const HomeApp = React.lazy(() => import(/* webpackChunkName: "home-page" */ "./Home/Home"));
const AlbumDetailsApp = React.lazy(() => import(/* webpackChunkName: "album-page" */ "./AlbumDetails/AlbumDetails"));
const FavouriteAlbumsApp = React.lazy(() => import(/* webpackChunkName: "fav-page" */ "./FavouriteAlbums/FavouriteAlbums"));

const App = () => {
    return (<React.Suspense fallback={<div>loading</div>}>
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomeApp/>
                </Route>
                <Route exact path="/album">
                    <AlbumDetailsApp/>
                </Route>
                <Route exact path="/favourites">
                    <FavouriteAlbumsApp/>
                </Route>
                <Route render={() => <Redirect to="/"/>}/>
            </Switch>
        </Router>
    </React.Suspense>)
};

export default App;
