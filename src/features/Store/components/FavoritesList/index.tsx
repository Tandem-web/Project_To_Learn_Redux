import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import FavoritesCardWrap from "./FavoriteWrap";

function FavoritesList() {
    const favorites = useSelector((state: RootState) => state.products.favorites)
    const favoriteIds = Object.keys(favorites).filter((id) => favorites[Number(id)]);


    return (
        <>
            <div className="store-list-cards-wrapper">
                {
                    favoriteIds.map((id) => (
                        <FavoritesCardWrap key={`store-favorites-wrap-${id}`} productId={Number(id)}/>
                    ))
                }
            </div> 
        </>
    );
}

export default FavoritesList;