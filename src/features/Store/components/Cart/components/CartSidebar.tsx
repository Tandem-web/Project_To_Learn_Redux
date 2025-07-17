import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

function CartSidebar() {
    const totalPrice = useSelector((state: RootState) => state.cart.cartInfo.totalPrice)
    return (
        <>
            <div className="cart-container-sidebar">
                <div className="cart-order">
                    <div className="cart-order__total">
                        <span>Итого</span>
                        <span>$ {totalPrice}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartSidebar;