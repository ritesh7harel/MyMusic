const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                favouriteAlbums: action.payload,
            };
        default:
            throw new Error();
    }
};

export default reducer;
