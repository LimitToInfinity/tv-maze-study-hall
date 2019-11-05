import React from "react";

function ShowInfo({ name, rating, runtime }) {

    return (
        <div className="show-info">
            <h3>{name}</h3>
            <p>Rating {rating}</p>
            <p>{runtime} mins</p>
        </div>
    );
}

export default ShowInfo;