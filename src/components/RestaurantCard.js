import { RESLIST_IMAGE_PATH } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg w-[200px] h-[150px]" src={`${RESLIST_IMAGE_PATH}${resData.info.cloudinaryImageId}`} alt="res-logo" />
            <h3 className="font-bold py-4">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating} Star</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
            <h4>{resData.info.areaName}</h4>
        </div>
    );
};

export const withPromoted = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
                <RestaurantCard {...props} />
            </>
        );
    }
}

export default RestaurantCard;