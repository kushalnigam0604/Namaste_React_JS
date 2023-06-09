import React , {useState , useEffect} from "react";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
function filterData(searchText, allRestaurants){
  const data = allRestaurants.filter((val) => 
  val?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return data;
}

const Body = () => {

  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(filteredRestaurants?.length === 0) return <h1>Restaurant Not Found.</h1>

  return (allRestaurants?.length === 0) ? <Shimmer/> : (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
        }} />
        <button className="search-btn" onClick={() => {
          const data = filterData(searchText,allRestaurants);
          setFilteredRestaurants(data);
        }}>Search</button>
    </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((val) => {
          return (
            <RestaurantCard {...val.data} key={val.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
