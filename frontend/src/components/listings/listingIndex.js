import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";

function ListingsIndex (props) {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    
    useEffect(() => {
        dispatch(fetchListings())
    }, []);

    return (
        <div className="index-container">
            {
                listings.map( (listing) => {
                    listing.price
                })
            }
        </div>
    )
}

export default ListingsIndex;