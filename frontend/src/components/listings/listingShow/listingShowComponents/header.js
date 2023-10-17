import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from '@mui/icons-material/Star';
import sampleImg from '../../../../assets/example_card_image.png';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './header.css'

function ListingHeader( {listing} ) {


    return (
        <div className="header-container">
            <div className="header-info">
                <h1 className="heading-title">{listing.title}</h1>
                <div className="header-links">
                    <div className="header-review-info">
                        <StarIcon className="review-icon"/>
                        <p className="review-average">4.78</p>
                        <p className="review-number">42 reviews</p>
                        <p>{listing.location}</p>
                    </div>
                    <div className="share-save-buttons">
                        <div className="share-link">
                            <IosShareIcon className="share-icon"/>
                            <p className="share-text">Share</p>
                        </div>
                        <div className="favorite-link">
                            <FavoriteBorderIcon className="save-icon"/>
                            <p className="save-text">Save</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="images-container">
                <img className="main-image" src={sampleImg}/>
                <div className="sub-images-container">
                    <img className="sub-image" src={sampleImg}/>
                    <img className="sub-image" src={sampleImg}/>
                    <img className="sub-image" src={sampleImg}/>
                    <img className="sub-image" src={sampleImg}/>
                </div>
            </div>
            <div className="hosting-info">
                <p className="host-name">Hosted by host.name</p>
                <p className="num-guests">{listing.numGuests} guests</p>
                <p className="num-beds">{listing.numBeds} beds</p>
            </div>
        </div>
    )
}

export default ListingHeader;