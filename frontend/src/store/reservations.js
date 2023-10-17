import csrfFetch from "./csrf";

export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS'


export const receiveReservation = (reservation) => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
}

export const removeReservation = (reservationId) => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    }
}

export const receiveReservations = (reservations) => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    }
}

export const getReservation = (reservationId) => (state) => {
    return state.reservations ? state.reservations[reservationId] : null;
}

export const getReservations = () => (state) => {
    return state.reservations ? Object.values(state.posts) : [];
}

export const fetchReservations = () => async (dispatch) => {
    const res = await csrfFetch('/api/reservations');

    if (res.ok) {
        const reservations = await res.json()
        dispatch(receiveReservations(reservations));
    }
}

export const createReservation = (reservation) => async (dispatch) =>{
    const res = await csrfFetch('/api/reservations', {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    if (res.ok) {
        const newReservation = await res.json();
        dispatch(receiveReservation(newReservation))
    } 
}

export const updateReservation = (reservation) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(reservation)
    });

    if (res.ok) {
        const updateRes = await res.json();
        dispatch(receiveReservation(updateRes))
    }
}

export const deleteReservation = (reservationId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeReservation(res));
    }
}

const reservationsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_RESERVATION:
            nextState[action.reservation.id] = action.reservation;
            return nextState;
        case REMOVE_RESERVATION:
            delete nextState[action.reservationId];
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;