import React from "react";
import { Link } from 'react-router-dom';
import sampleImg from '../../../assets/example_card_image.png';
import StarIcon from '@mui/icons-material/Star';
import './listingIndexItem.css';

function ListingIndexItem ({listing}) {
    return (
        <>
            <Link to={`/listings/${listing.id}`} className="card">
                <img className="card-img" src={sampleImg}/>
                <div className="top-card-info">
                    <p className="card-title">{listing.title}</p>
                    <div className="card-rating">
                        <StarIcon className="star-icon"/>
                        <p className="rating-number">3.5</p>
                    </div>
                </div>
                <div className="middle-card-info">
                    <p className="filter-info">Mountain and Ocean Views</p>
                    <p className="dates-available">Dec 15 - 20</p>
                </div>
                <div className="bottom-card-info">
                    <p className="card-price">${listing.price}</p>
                </div>
            </Link>
        </>
    )
}

export default ListingIndexItem;