import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductApi, ProductsBusket } from "../model/types";

interface CartState{
    items: ProductsBusket,
    cartInfo: {
        totalPrice: number
    }
}

const initialState:CartState = {
    items: [],
    cartInfo:{
        totalPrice: 0,
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductApi>) => {
            const product = action.payload;
            const productId = product.id;
            
            const cartProducts = state.items;

            if(!cartProducts.find(product => product.info.id === productId)){
                state.items = [...cartProducts, {
                    info: product,
                    amount: 1
                }]
            }

            state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        },
        removeFromCart: (state, action: PayloadAction<ProductApi["id"]>) => {
            const cartProducts = state.items;
            const productId = action.payload;
            state.items = cartProducts.filter(item => item.info.id != productId);

            state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        },
        increaseQuantity: (state, action: PayloadAction<ProductApi["id"]>) => {
            const cartProducts = state.items;
            const productId = action.payload;

            state.items = cartProducts.map(item => (
                item.info.id === productId ? (
                    {
                        ...item,
                        amount: ++item.amount > 99 ? 99 : item.amount, 
                    }
                ) : (
                    item
                )
            ))

            state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        },

        decreaseQuantity: (state, action: PayloadAction<ProductApi["id"]>) => {
            const cartProducts = state.items;
            const productId = action.payload;

            state.items = cartProducts.map(item => (
                item.info.id === productId ? (
                    {
                        ...item,
                        amount: --item.amount < 1 ? 1 : item.amount, 
                    }
                ) : (
                    item
                )
            ))

            state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        },
        setQuantity: (state, action: PayloadAction<{id: ProductApi["id"], quantity: number}>) => {
            const productId = action.payload.id;
            let quantity = action.payload.quantity;
                
            if(quantity < 1){
                quantity = 1
            }
            if(quantity > 99){
                quantity = 99;
            }

            state.items = state.items.map(item => (
                item.info.id === productId ? ({
                    ...item,
                    amount: quantity
                }) : item
            ))

            state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        }
    }
})

const calculateTotalPrice = (items: CartState["items"]): number => {
    return items.reduce((acc, item) => acc + item.amount * item.info.price, 0);
};

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;