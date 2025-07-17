import StoreCardLoader from "../StoreCard/StoreCardLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useGetProductsQuery } from "../../api/store-apiSlice";
import StoreCard from "../StoreCard/StoreCard";

function StoreList() {
    const { data: products = [], isLoading, error } = useGetProductsQuery()
    const showingState = useSelector((state: RootState) => state.storeState.showingState);

    // const loading = useSelector((state: RootState) => state.products.loading)

    if(isLoading){
        return(
            <>
            <div className="store-list-cards-wrapper">
                {
                    new Array(10).fill(1).map((_, index) => (
                        <StoreCardLoader key={`store-card-loader-${index}`}/>
                    ))
                }
            </div>
            </>
        )
    }
    return (
        <>
            <div className="store-list-cards-wrapper">
                {
                    products.map((product) => (
                        <StoreCard key={`store-card-${product.id}`} productInfo={product} productId={product.id}/>
                    ))
                }
            </div> 
        </>
    );
}

export default StoreList;