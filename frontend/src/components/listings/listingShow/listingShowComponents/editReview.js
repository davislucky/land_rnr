import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../../../store/reviews";
import { Link } from "react-router-dom";


function EditButton({review}) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    return (currentUser.id === review.authorId) ? (
        <>
            <Link to={`/reviews/${review.id}`}>
                <button>Edit review</button>
            </Link>
            <button onClick={() => dispatch(deleteReview(review.id))}>Delete review</button>
        </>
        
    ) : null
}

export default EditButton;