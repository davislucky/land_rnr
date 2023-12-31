import csrfFetch from "./csrf";
import { receiveReviews } from "./reviews";

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';

export const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

export const receiveListing = (listing) => {
    return {
        type: RECEIVE_LISTING,
        listing
    }
}

export const getListings = state => {
    return state.listings ? Object.values(state.listings) : [];
}

export const getListing = listingId => state => {
    return state.listings ? state.listings[listingId] : null;
}

export const fetchListings = () => async (dispatch) => {
    const res = await csrfFetch('/api/listings');

    if (res.ok) {
        const listings = await res.json();
        dispatch(receiveListings(listings));
        // dispatch(receiveReviews(listings.reviews));
    }
}

export const fetchListing = (listingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listingId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveListing(data.listing));
        dispatch(receiveReviews(data.reviews));
    }
}

const listingReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_LISTING:
            nextState[action.listing.id] = action.listing;
            return nextState;
        case RECEIVE_LISTINGS:
            return { ...action.listings }
        default:
            return state;
    }
}

export default listingReducer;