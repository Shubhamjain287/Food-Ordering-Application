import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Home = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState();

    const getRestaurant = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING`);
        const json = await res.json();
        setData(json?.data?.cards[2]?.data?.data?.cards);
        // console.log(json);
    }

    const filterData = (searchTxt, restaurants) => {
        const newData = restaurants.filter((restaurant)=>{
            return restaurant.data.name.includes(searchTxt);
        });
        
        console.log(newData);
        return newData;
    }

    useEffect(()=>{
        getRestaurant();
    },[]);

    return (
        <>
            <div className="search-restaurant">
                <h1 className="restaurants"> {data.length} Restaurants </h1>
                <div className="search">
                    <h2 className=""> Search Restaurant </h2>
                    <div>
                        <input type="text" placeholder="Search Restaurants" onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={() => {
                            const NewData = filterData(search,data)
                            setData(NewData)
                        }}> Search </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
            {
                (data.length===0) ? ( Array(20).fill("").map(() => {
        return <Shimmer />
    }) ) : data.map((card) => {
                    return (
                            <Link to={`/restaurant/${card.data.id}`}  key={card.data.id}>
                                <Card card={card} />
                            </Link>
                    )
                })
            }
            </div>
        </>
    )
}

export default Home;