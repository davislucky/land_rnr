import React from "react";

function Checkout ({listing}) {
    
    return (
        <div className="checkout-box">
            <form>
                <input type="date" className="start-date">Start Date</input>
                <input type="date" className="end-date">End Date</input>
                <button>Reserve</button>
            </form>
            
        </div>
    )
}

export default Checkout;