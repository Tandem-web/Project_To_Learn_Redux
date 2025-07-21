import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useGetCartProductsByIdsQuery } from "../../../api/store-apiSlice";

const texts = ['товар', 'товара', 'товаров'];
const sklonenie = (number:number, txt: string[], cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

function CartContent() {
    const cardIds = useSelector((state: RootState) => state.cart.cartProductIds);
    const { data: data, isLoading, error } = useGetCartProductsByIdsQuery(cardIds);

    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    return (
        <>
            <div className="cart-container-content">
                <div className="cart-content-header">
                    <h1>Корзина</h1>
                </div>
                <div className="cart-list">
                    {
                        cardIds.length > 0 ? (
                            <>
                                <div>
                                    <span className="cart-list-info">{`${cardIds.length} ${sklonenie(cardIds.length, texts)}`}</span>
                                </div>
                                {
                                    isLoading ? (
                                        <>Загрузка...</>
                                    ) : (
                                        Object.values(cartProducts).map((product, id) => (
                                            <CartItem key={`cart-item-${id}`} product={product}/>
                                        ))
                                    )
                                }
                            </>
                        ) : (
                            <div>
                                <span className="cart-list-info">Нет товаров</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default CartContent;