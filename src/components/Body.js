import RestaurantCard, {withPromoted} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setsearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromoted(RestaurantCard);

    // console.log('Body Rendered', listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(RES_LIST_URL);
        const resList = await data.json();
        // console.log(resList?.data);
        setListOfRestaurants(resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // console.log('onlineStatus', onlineStatus);
    if (onlineStatus === false) {
        return (<h2>Looks like you are offline now!!</h2>);
    }

    const { loggedInUser, setUserName } = useContext(UserContext);

    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} placeholder="Type.." onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {
                        const filteredRest = listOfRestaurants.filter((res) => {
                            // console.log(searchText);
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredList(filteredRest);
                    }}>Search</button>
                    <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {
                        const topList = listOfRestaurants.filter((res) => {
                            // console.log(res.info.avgRating);
                            return res.info.avgRating > 4;
                        });
                        setFilteredList(topList);
                        // console.log(topList);
                    }}>Top Rated Restaurants</button>

                    <input type="text" className="border border-solid border-black" value={loggedInUser} placeholder="Type.." onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </div>
            </div>
            <div className="flex flex-wrap flex-row justify-evenly">
                {
                    filteredList.map((rest) => {
                        return (
                            <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
                                {
                                    rest.info.avgRating > 4.2 ? <RestaurantCardPromoted resData={rest} /> : <RestaurantCard resData={rest} />
                                }
                            </Link>);
                    })
                }
            </div>
        </div>
    );
};
export default Body;