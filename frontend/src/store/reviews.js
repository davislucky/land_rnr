import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReview = (reviewId) => (state) => {
    return state.reviews ? state.reviews[reviewId] : null;
}

export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : []
}

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);

    if (res.ok) {
        const data = await res.json()
        dispatch(receiveReview(data));
    }
}

export const fetchReviews = () => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`);

    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews));
    }
}

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(review)
    });

    if (res.ok) {
        const newReview = await res.json();
        dispatch(receiveReview(newReview));
    }
}

export const updateReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(review)
    });

    if (res.ok) {
        const updatedReview = await res.json();
        dispatch(receiveReview(updatedReview));
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        dispatch(removeReview(reviewId))
    }
}

const reviewsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case RECEIVE_REVIEWS:
            return action.reviews;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;