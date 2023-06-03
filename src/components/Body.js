import React , {useState} from "react";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";

//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
function filterData(searchText, restaurants){
  const data = restaurants.filter((val) => 
  val.data.name.includes(searchText)
  );
  return data;
}

const Body = () => {

  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restrauntList);

  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
        }} />
        <button className="search-btn" onClick={() => {
          const data = filterData(searchText,restaurants);
          setRestaurants(data);
        }}>Search</button>
    </div>
      <div className="restaurant-list">
        {restaurants.map((val) => {
          return (
            <RestaurantCard {...val.data} key={val.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
