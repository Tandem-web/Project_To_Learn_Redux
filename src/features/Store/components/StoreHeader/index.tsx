import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { changeShowingState, Showing } from "../../slices/store-state-slice";

function StoreHeader() {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.products.favorites);
    const favoriteIds = Object.keys(favorites).filter((id) => favorites[Number(id)]);
    const cartItems = useSelector((state: RootState) => state.cart.cartProductIds);

    const showingState = useSelector((state: RootState) => state.storeState.showingState);

    return (
        <>
            <div className="store-header-container">
                <div className="store-header-button-wrapper">
                    <button 
                        className="store-header-button button-with-amount" 
                        onClick={
                            () => {
                                showingState === Showing.FAVORITE ? dispatch(changeShowingState(Showing.PRODUCTS)) : dispatch(changeShowingState(Showing.FAVORITE))
                            }
                        }
                    >
                        <div className="amount-favorite-items">{favoriteIds.length}</div>
                        <FaHeart/>
                    </button>
                </div>
                <div className="store-header-button-wrapper">
                    <button 
                        className="store-header-button button-with-amount"
                        onClick={
                            () => {
                                showingState === Showing.CART ? dispatch(changeShowingState(Showing.PRODUCTS)) : dispatch(changeShowingState(Showing.CART))
                            }
                        }
                    >
                        <div className="amount-favorite-items">{cartItems.length}</div>
                        <FaCartShopping/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default StoreHeader;