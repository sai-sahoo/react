import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenus, setResMenus] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        // console.log(json.data);
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        // setResMenus(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const categories = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        // console.log(categories);
        setResMenus(categories);
    }
    return [resInfo, resMenus];
}
export default useRestaurantMenu;