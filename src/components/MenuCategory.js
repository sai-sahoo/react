import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, showItems, setShowIndex }) => {
    const handleCategory = (e) => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex justify-between cursor-pointer" onClick={handleCategory}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="mt-[10px] h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-blue-600"></span>
            </div>
            <div>
                { showItems && <ItemList items={data.itemCards} /> }
            </div>
        </div>
    );
}

export default MenuCategory;