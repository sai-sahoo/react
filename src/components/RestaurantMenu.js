import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, resMenus] = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />;
    }
    // console.log(resMenus);
    return (
        <div>
            <div className="text-center">
                <div><h2 className="font-bold my-5 text-2xl">{resInfo.name}</h2></div>
                <div className="font-bold">{resInfo.cuisines.join(', ')}</div>
                <div className="font-bold">{`${resInfo.locality}, ${resInfo.areaName}`}</div>
                <div className="font-bold">{resInfo.feeDetails.message}</div>
                {
                    resMenus ? resMenus.map((menu, index) => {
                        return <MenuCategory key={menu?.card?.card?.itemCards[0]?.card?.info?.id} data={menu?.card?.card} showItems={ index === showIndex ? true : false } setShowIndex={() => setShowIndex(index)} />
                    }) : <div>No Items found</div>
                }
            </div>
        </div>
    );
}
export default RestaurantMenu;