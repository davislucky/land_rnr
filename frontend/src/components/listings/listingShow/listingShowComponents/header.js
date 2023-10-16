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
                <p>{listing.title}</p>
                <div className="header-links">
                    <div className="header-review-info">
                        <StarIcon />
                        <p>4.78</p>
                        <p>42 reviews</p>
                        <p>{listing.location}</p>
                    </div>
                    <div className="share-save-buttons">
                        <div className="share-link">
                            <IosShareIcon />
                            <p>Share</p>
                        </div>
                        <div className="favorite-link">
                            <FavoriteBorderIcon />
                            <p>Save</p>
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
        </div>
    )
}

export default ListingHeader;