export function filterData(searchText, allRestaurants){
    const data = allRestaurants.filter((val) => 
    val?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return data;
  }