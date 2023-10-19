import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './checkout.css';
import { createReservation } from "../../../../store/reservations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Checkout ({listing}) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const [numGuests, setNumGuests] = useState(0);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    
    const reservation = {
        listing_id: listing.id,
        guest_id: null,
        num_guests: numGuests,
        check_in: checkIn,
        check_out: checkOut
    }

    if (currentUser) {
        reservation.guest_id = currentUser.id
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReservation(reservation));
    }

    const handleCheckInDate = e => {
        e.preventDefault();
        setCheckIn(e.target.value);
    }

    const handleCheckOutDate = e => {
        e.preventDefault();
        setCheckOut(e.target.value);
    }

    const handleNumGuests = e => {
        e.preventDefault();
        setNumGuests(e.target.value)
    }

    
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
            <input 
                type="date" 
                onChange={handleCheckInDate}    
            />
            <input 
                type="date" 
                onChange={handleCheckOutDate}    
            />
            <input 
                type="text" 
                onChange={handleNumGuests}
            />
            <button onClick={handleSubmit}>Reserve</button>
        </div>
    )
}

export default Checkout;