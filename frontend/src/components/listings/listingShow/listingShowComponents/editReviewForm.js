import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReview, getReview } from "../../../../store/reviews";
import { useState } from "react";
import { updateReview } from "../../../../store/reviews";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function EditReviewForm() {
    const { reviewId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const review = useSelector(getReview(reviewId));
    const [updatedReview, setUpdateReview] = useState({
        id: reviewId,
        author_id: review.authorId,
        listing_id: review.listingId,
        location: review.location,
        cleanliness: review.cleanliness,
        accuracy: review.accuracy,
        value: review.value,
        check_in: review.checkIn,
        communication: review.communication,
        blurb: review.blurb
    });

    const handleEdit = e => {
        e.preventDefault();
        dispatch(updateReview(updatedReview));
        history.push(`/listings/${updatedReview.listing_id}`)
    }

    const handleChange = field => e => {
        e.preventDefault();
        setUpdateReview({...updatedReview, [field]: e.target.value });
    }
    
    return (
        <>
            <h1>Edit your review</h1>
            <div className="edit-review-container">
                <label> Cleanliness
                    <input type="number" value={updatedReview.cleanliness} onChange={handleChange('cleanliness')}/>
                </label>
                <label> Accuracy
                    <input type="number" value={updatedReview.accuracy} onChange={handleChange('accuracy')}/>
                </label>
                <label> Communication
                    <input type="number" value={updatedReview.communication} onChange={handleChange('communication')}/>
                </label>
                <label> Value
                    <input type="number" value={updatedReview.value} onChange={handleChange('value')}/>
                </label>
                <label> Check-in
                    <input type="number" value={updatedReview.check_in} onChange={handleChange('check_in')}/>
                </label>
                <label> Location
                    <input type="number" value={updatedReview.location} onChange={handleChange('location')}/>
                </label>
                <label> Your review:
                    <textarea defaultValue={updatedReview.blurb} onChange={handleChange('blurb')} rows={5} cols={30}/>
                </label>
            </div>
            <div>
                <button onClick={handleEdit}>Finish editing</button>
            </div>
        </>
    )
}

export default EditReviewForm;