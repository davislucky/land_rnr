import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchReservations, getReservations, updateReservation, deleteReservation } from "../../store/reservations";
// import { Link } from "react-router-dom";
import EditReservation from './editReservation/editReservation';
import "./userShow.css"
import { restoreSession } from "../../store/session";


function UserShow( ) {
    const reservations = useSelector(state => state.reservations);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(reservations)    
        if (!Object.values(reservations).length) {
            dispatch(restoreSession())
        }
    }, [])
    return reservations ? (
        <div className="reservations-show-container">
            <h1>Your reservations:</h1>
            <ul className="reservations-list">
               {
                Object.values(reservations).map(reservation => 
                    <EditReservation reservation={reservation} key={reservation.id}/>)
               }
            </ul>
        </div>
    ) : null;
}

export default UserShow;