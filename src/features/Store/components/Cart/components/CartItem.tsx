import { FaHeart, FaMinus, FaPlus, FaTrash, FaWallet } from "react-icons/fa6";
import { ProductApi, ProductBusket } from "../../../model/types";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
// import { decreaseQuantity, increaseQuantity, removeFromCart, setQuantity } from "../../../slices/rtk-cart-slice";
import { toggleFavorite } from "../../../slices/rtk-product-slice";
import { useGetCartProductByIdQuery } from "../../../api/store-apiSlice";

interface CartItemProps{
    productId: ProductApi["id"];
    key: string;
}

const CartItem:React.FC<CartItemProps> = (props) => {
    const dispatch: AppDispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.products.favorites);
    const favoriteIds = Object.keys(favorites).filter(id => favorites[Number(id)]);

    const { productId } = props;

    // const [localAmount, setLocalAmount] = useState(product.amount); 
    const [localAmount, setLocalAmount] = useState(0); 


     const { data: data, isLoading, error } = useGetCartProductByIdQuery(productId);
    
    // useEffect(() => {
    //     setLocalAmount(product.amount);
    // }, [product.amount]);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        // dispatch(setQuantity({id: product.info.id, quantity: newValue}));
        setLocalAmount(newValue);
    };

    
    // const inFavorite = favoriteIds.includes(String(product.info.id));

    return (
        <>
            <div className="cart-item-container">
                <div className="cart-item__wrap">
                    <div className="cart-item__good">
                        {/* <img src={product.info.images[0]} width="98" height="98" alt={product.info.title} className="cart-item__good-img"/> */}
                        <div className="cart-item__good-info">
                            {/* <div className="cart-item__good-info-name">{product.info.title}</div> */}
                            {/* <div className="cart-item__good-info-category">{product.info.category.name}</div> */}
                            <div className="cart-item__btns-wrap">
                                {/* <button className={`cart-item__btn ${inFavorite ? 'favorite' : ''}`} onClick={() => dispatch(toggleFavorite(product.info.id))}>
                                    <FaHeart/>
                                </button> */}
                                {/* <button className="cart-item__btn" onClick={() => dispatch(removeFromCart(product.info.id))}>
                                    <FaTrash/>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="cart-item__count">
                        {/* <button type="button" className="cart-item__count-button" aria-label="Уменьшить количество" onClick={() => dispatch(decreaseQuantity(product.info.id))}>
                            <FaMinus/>
                        </button> */}
                        <input  type="number"  
                                autoComplete="off" 
                                maxLength={2} 
                                value={localAmount} 
                                min="1" 
                                max="99" 
                                onChange={(e) => setLocalAmount(Number(e.target.value))}
                                onBlur={handleBlur}
                                className="cart-item__count-input"
                        >
                        </input>
                        {/* <button type="button" className="cart-item__count-button" aria-label="Увеличить количество" onClick={() => dispatch(increaseQuantity(product.info.id))}>
                            <FaPlus/>
                        </button> */}
                    </div>
                    <div className="cart-item__price">
                        {/* <span className="cart-item__price-text"><FaWallet/>$ {product.info.price * product.amount}</span> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;