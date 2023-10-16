import React from "react";

function ListingShowInfo ( {listing} ) {


    return (
        <div className="info-container">
            <div className="description-container">
                <span className="description-text">{listing.description}</span>
            </div>
            <div className="amenities">

            </div>
            <div className="date-picker">

            </div>
        </div>
    )
}

export default ListingShowInfo;