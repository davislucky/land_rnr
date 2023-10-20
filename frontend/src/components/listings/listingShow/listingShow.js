import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../../store/listings";
import ListingHeader from "./listingShowComponents/header";
import './listingShow.css'
import ListingShowInfo from "./listingShowComponents/info";
import Checkout from "./listingShowComponents/checkout";
import Reviews from "./listingShowComponents/reviews";




function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(getListing(listingId));

    useEffect(() => {
        dispatch(fetchListing(listingId));
    }, []);

    return listing ? (
        <>
            <div className="show-page">
                <ListingHeader listing={listing}/>
                <div className="split-middle-components">
                    <ListingShowInfo listing={listing}/>
                    <Checkout className="checkout-box" listing={listing}/>
                </div>
                <Reviews className="review-box" listing={listing} />

            </div>
        </>
    ) : null;
}

export default ListingShowPage;

