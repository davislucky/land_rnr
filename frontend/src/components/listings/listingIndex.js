import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import ListingIndexItem from "./listingIndexItem/listingIndexItem";
import './listingIndex.css'
import { fetchReviews } from "../../store/reviews";

function ListingsIndex () {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    
    useEffect(() => {
        dispatch(fetchListings(listings))
        // dispatch(fetchReviews());
    }, []);

    return (
        <div className="index-container">
            {
                listings.map( (listing) => <ListingIndexItem key={listing.id} listing={listing}/>)
            }
        </div>
    )
}

export default ListingsIndex;