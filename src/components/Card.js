import React from 'react';
import { AiFillStar } from "react-icons/ai";

const Card = ({card}) => {
  return (
    <>
            <div className="card">
                    <img className="card-img" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${card?.data?.cloudinaryImageId}`} alt="" />
                    <div className="card-content">
                        <h1 className="heading"> { card?.data?.name }</h1>
                        <p className="address"> { card?.data?.address } </p>
                        <span className="rating"> <AiFillStar /> { card?.data?.avgRating } </span>
                        <span className="time"> {card?.data?.minDeliveryTime} minutes </span>
                    </div>
            </div>      
    </>
  )
}

export default Card