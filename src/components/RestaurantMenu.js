import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from './Shimmer';
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const restaurant = useRestaurant(params.id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item?.card?.info));
  }

  if(!restaurant){
    return <Shimmer/>;
  }

  return (
    <div className="flex">
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
      <div className="p-5">
        <h2>Menu</h2>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name} - <button className="px-2 text-white bg-red-500" onClick={() => addFoodItem(item)}>Add</button></li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
