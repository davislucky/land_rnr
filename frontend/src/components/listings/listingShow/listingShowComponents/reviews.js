import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../../store/reviews";
import EditButton from "./editReview";
import { deleteReview } from "../../../../store/reviews";
import { Link } from "react-router-dom";

function Reviews( {listing} ) {
    // const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    const currentUser = useSelector(state => state.session.user);

    if (currentUser) {
        return (
            <>
                <h1>Reviews for {listing.title}</h1>
                <Link to={`/reviews/new`}>
                    <button>Leave a review</button>
                </Link>
                <ul>
                   {
                    reviews.map(review => <li key={review.id}>
                        {/* <h2>{review.id}</h2> */}
                        <h3>{review.authorId}</h3>
                        <p> Cleanliness {review.cleanliness}</p>
                        <p> Communication {review.communication}</p>   
                        <p> Accuracy {review.accuracy}</p>   
                        <p> Location {review.location}</p>   
                        <p> Check-in {review.checkIn}</p>   
                        <p> Value {review.value}</p>  
                        <span>{review.blurb}</span>
                        <br /> 
                        <EditButton review={review}/>
                    </li>)
                   } 
                </ul>
            </>
        ) 
    } else {
        return (
            <>
                <h1>Reviews for {listing.title}</h1>
                <ul>
                   {
                    reviews.map(review => <li key={review.id}>
                    
                        <h3>{review.authorId}</h3>
                        <p> Cleanliness {review.cleanliness}</p>
                        <p> Communication {review.communication}</p>   
                        <p> Accuracy {review.accuracy}</p>   
                        <p> Location {review.location}</p>   
                        <p> Check-in {review.checkIn}</p>   
                        <p> Value {review.value}</p>  
                        <span>{review.blurb}</span>
                    </li>)
                   } 
                </ul>
            </>
        )
    }
}

export default Reviews;