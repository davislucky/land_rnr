import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../../store/listings";
import ListingHeader from "./listingShowComponents/header";



function ListingShowPage() {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(getListing(listingId));

    useEffect(() => {
        dispatch(fetchListing(listingId));
    }, [listingId, dispatch]);

    return (
        <>
            <div className="show-page">
                <ListingHeader listing={listing}/>
            </div>
        </>
    )
}

export default ListingShowPage;