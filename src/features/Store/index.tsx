import StoreList from './components/StoreList';
import './styles/index.scss'
import StoreHeader from './components/StoreHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Showing } from './slices/store-state-slice';
import FavoritesList from './components/FavoritesList';
import Cart from './components/Cart';

function Store() {
    const showingState = useSelector((state: RootState) => state.storeState.showingState);
    
    return (
        <>
            <StoreHeader/>
            {

                showingState === Showing.CART ? (
                    <Cart/>
                ) : (
                    showingState === Showing.PRODUCTS ? (
                        <StoreList/>
                    ) : (
                        <FavoritesList/>
                    )
                )
            }
            
            
        </>
    );
}

export default Store;