import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchReservations, getReservations, updateReservation } from "../../store/reservations";


function UserShow( ) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    // const reservations = useSelector(getReservations());
    
    useEffect(() => {
        dispatch(fetchReservations)
    }, [])

    return (
        <>
            <h1>User Show page</h1>
        </>
    )
}

export default UserShow;