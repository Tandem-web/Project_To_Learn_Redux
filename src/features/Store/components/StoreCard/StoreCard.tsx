import {FaCartShopping, FaHeart } from "react-icons/fa6";
// import { Product } from "../../model/types";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { changeShowingState, Showing } from "../../slices/store-state-slice";
// import { toggleFavorite } from "../../slices/shit/favorite-slice";
import { useSelector } from "react-redux";
import { ProductApi } from "../../model/types";
import { toggleFavorite } from "../../slices/rtk-product-slice";
import { addToCart } from "../../slices/rtk-cart-slice";
// import StoreCardLoader from "./StoreCardLoader";

interface StoreCardProps{
    productInfo?: ProductApi;   
    productId: ProductApi["id"]; 
    key: string;
}

const StoreCard: React.FC<StoreCardProps> = (props) => {
    const {productInfo, productId} = props;

    const dispatch: AppDispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.products.favorites);
    const favoriteIds = Object.keys(favorites).filter(id => favorites[Number(id)]);
    
    const inFavorite = favoriteIds.includes(String(productId));

    const cartItems = useSelector((state: RootState) => state.cart.cartProductIds);
    const inCart = cartItems.find(productId => productId === productInfo.id) ? true : false;

    return (
        <>
            <div className="card-wrapper">
                <div className="card-top-wrapper">
                    <button className={`card-app-to-favorite ${inFavorite ? 'favorite' : ''}`} onClick={() => dispatch(toggleFavorite(productId))}><FaHeart/></button>
                    <div className="card-thumbnail-wrap">
                        <img width="516" height="688" className="card-thumbnail"src={productInfo.images[0]} alt={productInfo.title} />
                    </div>
                </div>
                <div className="card-middle-wrapper">
                    <div className="card-price-wrap">
                        <span className="card-price">${productInfo.price}</span>
                    </div>
                    <div className="card-product-name-wrap">
                        <span className="card-product-category">{productInfo.category.name}</span>
                        <span className="card-product-name">
                            <span className="card-product-name-separator"> / </span>
                            {productInfo.title}
                        </span>
                    </div>
                </div>
                <div className="card-bottom-wrapper">
                    {
                        inCart ? (
                            <button 
                                className={`card-button-add-to-basket card-button-in-busket`}
                                onClick={() => dispatch(changeShowingState(Showing.CART))}>
                                В корзине
                            </button>
                        ) : (
                            <button 
                                className={`card-button-add-to-basket`}
                                onClick={() => dispatch(addToCart(productId))}>
                                <FaCartShopping/>Купить
                            </button> 
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default StoreCard;