import React from "react";

const Card = ({album}) => {
    console.log(album);
    return (
        <div className="card">
            <div className="name">
                {album["im:name"].label};
            </div>
        </div>
    );
};

export default Card;
