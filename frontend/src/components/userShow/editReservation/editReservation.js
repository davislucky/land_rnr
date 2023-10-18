import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateReservation, deleteReservation } from "../../../store/reservations";
import './editReservation.css'

function EditReservation ({reservation}) {
    const dispatch = useDispatch();
    const [updatedRes, setUpdatedRes] = useState({
        id: reservation.id,
        guest_id: reservation.guestId,
        listing_id: reservation.listingId,
        check_in: reservation.checkIn,
        check_out: reservation.checkOut,
        num_guests: reservation.numGuests
    })

    const handleEdit = e => {
        e.preventDefault();
        dispatch(updateReservation(updatedRes))
    }

    const handleChange = field => e => {
        e.preventDefault();
        setUpdatedRes({ ...updatedRes, [field]: e.target.value });
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteReservation(reservation.id));
    }

    return (reservation) ? (
        <div className="edit-res-container">
            <div className="edit-box">
                <h3>Your reservation on {reservation.checkIn}</h3>
                <label> Number of guests
                    <input type="number" className="num-guests-editor" value={updatedRes.num_guests} onChange={handleChange('num_guests')}/>
                </label>
                <div className="checkin-box">
                    <label className="checkin-label"> Check-in 
                        <input type="date" className="checkin-editor" value={updatedRes.check_in} onChange={handleChange('check_in')}/>
                    </label>
                </div>
                <label className="checkout-label"> Check-out
                    <input type="date" className="checkout-editor" value={updatedRes.check_out} onChange={handleChange('check_out')}/>
                </label>
                <button onClick={handleEdit}>Edit reservation</button>
                <button onClick={handleDelete}>Cancel reservation</button>
                <div className="separator-line"></div>
            </div>
        </div>
    ) : null
}

export default EditReservation;