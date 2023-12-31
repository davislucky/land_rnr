import React from "react";
import { Link } from 'react-router-dom';
// import sampleImg from '../../../assets/example_card_image.png';
import StarIcon from '@mui/icons-material/Star';
import './listingIndexItem.css';
import { useSelector } from "react-redux";
import { getReviews } from "../../../store/reviews";


function ListingIndexItem ({listing}) {
    const reviews = useSelector(getReviews);

    if (listing.averageReview === null) {
        listing.averageReview = 0;
    }

    return (
        <>
            <Link to={`/listings/${listing.id}`} className="card">
                <img className="card-img" src={listing.photoUrl}/>
                <div className="top-card-info">
                    <p className="card-title">{listing.location}</p>
                    <div className="card-rating">
                        <StarIcon className="star-icon"/>
                        <p className="rating-number">{listing.averageReview ? listing.averageReview.toFixed(2) : 0}</p>
                    </div>
                </div>
                <div className="middle-card-info">
                    <p className="filter-info">Comfy and cozy and warm</p>
                    <p className="card-price">${listing.price} night</p>
                </div>
                <div className="bottom-card-info">
                    <p className="dates-available">Dec 15 - 20</p>
                </div>
            </Link>
        </>
    )
}

export default ListingIndexItem;