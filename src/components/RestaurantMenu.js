import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        params.id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  if(!restaurant){
    return <Shimmer/>;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restaurant ID : {params.id}</h1>
        <h2>
          Restaurant Name : {restaurant?.cards[0]?.card?.card?.info?.name}
        </h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt=""
        />
        <h3>Area : {restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>City : {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>Area : {restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>Rating : {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3>Rating : {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
