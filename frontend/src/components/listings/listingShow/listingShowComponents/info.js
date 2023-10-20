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
                    <div>
                        <div>
                            <p>{listing.parking}</p>    
                        </div>
                        <div>
                            <p>{listing.heating}</p>    
                        </div>
                        <div>
                            <p>{listing.ac}</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingShowInfo;