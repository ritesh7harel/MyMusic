import React, {useReducer} from "react";
import AppContext from "./appContext";
import reducer from "./appReducer";

const AppProvider = ({children}) => {
    const initialState = {
        favouriteAlbums: []
    };

    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
