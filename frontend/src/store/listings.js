import csrfFetch from "./csrf";

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';

export const loadListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

export const loadListing = (listingId) => {
    return {
        type: RECEIVE_LISTING,
        listingId
    }
}

export const fetchListings = () => async (dispatch) => {
    const res = 'hello';
}