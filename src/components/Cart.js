import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="p-4 m-4 text-center">
            <h1 className="text-2xl font-bold">My Cart</h1>
            <button className="p-2 m-2 bg-gray-200 rounded-lg" onClick={handleClearCart}> Clear Cart</button>
            <div>
                { cartItems.length === 0 && <h2>Cart is empty!!</h2>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
}
export default Cart;