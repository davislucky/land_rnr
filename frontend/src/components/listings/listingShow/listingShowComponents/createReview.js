import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, fetchReview, getReview } from "../../../../store/reviews";
import { useState } from "react";
import { updateReview } from "../../../../store/reviews";
import { Link } from "react-router-dom";


function CreateReview() {
    const currentUser = useSelector(state => state.session.user)
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const [newReview, setNewReview] = useState({
        author_id: currentUser.id,
        listing_id: listingId,
        location: 0,
        cleanliness: 0,
        accuracy: 0,
        value: 0,
        check_in: 0,
        communication: 0,
        blurb: ""
    });

    const handleCreate = e => {
        e.preventDefault();
        dispatch(createReview(newReview));
    }

    const handleChange = field => e => {
        e.preventDefault();
        setNewReview({...newReview, [field]: e.target.value });
    }
    
    return (
        <>
            <h1>Create a review</h1>
            <div className="edit-review-container">
                <label> Cleanliness
                    <input type="number" value={newReview.cleanliness} onChange={handleChange('cleanliness')}/>
                </label>
                <label> Accuracy:
                    <input type="number" value={newReview.accuracy} onChange={handleChange('accuracy')}/>
                </label>
                <label> Communication:
                    <input type="number" value={newReview.communication} onChange={handleChange('communication')}/>
                </label>
                <label> Value:
                    <input type="number" value={newReview.value} onChange={handleChange('value')}/>
                </label>
                <label> Check-in:
                    <input type="number" value={newReview.check_in} onChange={handleChange('check_in')}/>
                </label>
                <label> Location:
                    <input type="number" value={newReview.location} onChange={handleChange('location')}/>
                </label>
                <label> Your review:
                    <textarea defaultValue={newReview.blurb} onChange={handleChange('blurb')} rows={5} cols={30}/>
                </label>
            </div>
            <div>
                <Link to='/'>
                    <button onClick={handleCreate}>Finish editing</button>
                </Link>
            </div>
        </>
    )
}

export default CreateReview;