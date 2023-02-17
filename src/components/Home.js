import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Home = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState();

    const getRestaurant = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING`);
        const json = await res.json();
        setData(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json?.data?.cards[2]?.data?.data?.cards);
    }

    const handleSubmit = () => {
        
    }

    useEffect(()=>{
        getRestaurant();
    },[]);

    return (
        <>
            <h1 className="restaurants"> {data.length} Restaurants </h1>
            <div>
                <h2> Search Restaurant </h2>
                <input type="text" onChange={() => setSearch(e.target.value)} />
                <button onSubmit={handleSubmit}> Search </button>
            </div>
            <hr />
            <div className="container">
            {
                (data.length===0) ? ( Array(20).fill("").map(() => {
        return <Shimmer />
    }) ) : data.map((card) => {
                    return (
                            <div key={card.data.id} className="card">
                                <img className="card-img" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${card?.data?.cloudinaryImageId}`} alt="" />
                                <div className="card-content">
                                    <h1 className="heading"> { card?.data?.name }</h1>
                                    <p className="address"> { card?.data?.address } </p>
                                    <span className="rating"> { card?.data?.avgRating + " Stars" } </span>
                                    <span className="time"> {card?.data?.minDeliveryTime} minutes </span>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Home;