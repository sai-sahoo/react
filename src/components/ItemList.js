import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }
    return (
        <div>
            {
                items.map((item) => {
                    return <div key={item.card.info.id} className="w-6/12 mx-auto my-2 bg-white border-b-2 p-4 flex justify-between">
                        <div className="w-9/12 text-left">
                            {item.card.info.name}
                            <div className="">{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100} Rs</div>
                            <div>{item.card.info.description && item.card.info.description }</div>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                                <button className="p-2 bg-white shadow-lg m-auto" onClick={() => handleAddItem(item)}>ADD +</button>
                            </div>
                            {
                                item?.card?.info?.imageId ? <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/` + item?.card?.info?.imageId} /> : ''
                            }
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default ItemList;