import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Home = () => {

    const [data, setData] = useState([]);

    const getRestaurant = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING`);
        const json = await res.json();
        setData(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(()=>{
        getRestaurant();
    },[]);

    return (
        <>
            <h1> Home </h1>
            <div className="container">
            {
                (data.length===0) ? ( Array(20).fill("").map(() => {
        return <Shimmer />
    }) ) : data.map((card) => {
                    return (
                            <div key={card?.data?.id} className="card">
                                <img className="card-img" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${card?.data?.cloudinaryImageId}`} alt="" />
                                <h1> { card?.data?.name }</h1>
                                <p> { card?.data?.address } </p>
                                <h4> { card?.data?.avgRating + " Stars" } </h4>
                            </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Home;