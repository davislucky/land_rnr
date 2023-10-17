import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './checkout.css';
import DatePicker from "./datePicker";


function Checkout ({listing}) {
    
    return (
        <div className="checkout-box">
            <div className="checkout-header">
                <p>${listing.price} night</p>
                <div className="header-review-info">
                    <StarIcon className="review-icon"/>
                    <p className="review-average">4.78</p>
                    <p className="review-number">42 reviews</p>
                </div>
            </div>
            <DatePicker />
            <button>Reserve</button>
        </div>
    )
}

export default Checkout;