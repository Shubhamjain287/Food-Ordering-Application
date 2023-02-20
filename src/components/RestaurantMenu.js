import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  
    const { restaurantId } = useParams();
    const [ resdata, setresData] = useState();

    const fetchRestaurant = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=22.7195687&lng=75.8577258&menuId=${restaurantId}`);
        const json = await res.json();
        setresData(json.data);
        // console.log(json.data);
    }

    useEffect(()=>{
        fetchRestaurant();
    },[]);

    console.log(resdata);

    return (
        <>
            <h1> RestaurantMenu </h1>
            <div className='restaurant-detail'>
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resdata?.cloudinaryImageId}`} alt="" srcset="" />
                <div className='details'>
                    <h2> {resdata?.name} </h2>
                    {
                        resdata?.cuisines?.map((item)=>{
                            return (<p> {item} </p>)
                        })
                    }
                    <h2> {`${resdata?.locality}, ${resdata?.area}`}</h2>
                    <div>

                    </div>
                </div>
            </div>
            <h1> Menu </h1>
            {
                resdata &&
                Object.values(resdata?.menu?.items).map((item) => {
                    {/* console.log(item) */}
                    return (
                        <div key={item?.id} className='menu-item'>
                            <div className='name'>
                                <p> {item?.name} </p>
                                <h3> Price {item?.price / 100}</h3>
                            </div>
                            <div>
                            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`} alt="No Image Available" srcset="" />
                            <button className='btn'> Add </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RestaurantMenu;