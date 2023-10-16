import csrfFetch from "./csrf";

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
    }
}

export const fetchListing = (listingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listingId}`);

    if (res.ok) {
        const listing = await res.json();
        dispatch(receiveListing(listing));
    }
}

const listingReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_LISTING:
            nextState[action.listing.id] = action.listing;
            return nextState;
        case RECEIVE_LISTINGS:
            return {...action.listings }
        default:
            return state;
    }
}

export default listingReducer;