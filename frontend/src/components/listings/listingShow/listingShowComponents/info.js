import React from "react";
// import DatePicker from "./datePicker";

function ListingShowInfo ( {listing} ) {


    return (
        <div className="info-checkout">
            <div className="description-container">
                <span className="description-text">{listing.description}</span>
            </div>
            <div className="info-container">
                <div className="amenities">
                    {
                        Object.keys(listing).map((amenity, idx) => <p key={idx}>{amenity}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ListingShowInfo;