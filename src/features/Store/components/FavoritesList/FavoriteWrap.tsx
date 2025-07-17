import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import StoreCardLoader from "../StoreCard/StoreCardLoader";
import { useGetProductByIdQuery } from "../../api/store-apiSlice";
import StoreCard from "../StoreCard/StoreCard";

interface FavoritesCardWrapProp{
    productId: number;
    key: string;
}

function FavoritesCardWrap(prop: FavoritesCardWrapProp) {
    const { productId } = prop;
    const { data: product, isLoading, error } = useGetProductByIdQuery(productId)

    if (isLoading) return <StoreCardLoader key={`store-card-loader-${productId}`}/>

    if (!product) return null

    return (
        <StoreCard key={`store-card-${productId}`} productInfo={product} productId={productId}/>
    )
}

export default FavoritesCardWrap;