import { useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch( FETCH_MENU_URL + params.id + "&submitAction=ENTER");
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }
  return restaurant;
};

export default useRestaurant;