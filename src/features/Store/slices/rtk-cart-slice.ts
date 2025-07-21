import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductApi, ProductBusket, ProductsApi, ProductsBusket } from "../model/types";
import { api } from "../api/store-apiSlice";

interface CartState{
    cartProductIds: ProductApi["id"][],
    cartProducts: Record<ProductBusket["info"]["id"], ProductBusket>,
    cartInfo: {
        totalPrice: number
    }
}

const initialState:CartState = {
    cartProductIds: [],
    cartProducts: {},
    cartInfo:{
        totalPrice: 0,
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductApi["id"]>) => {
            const productId = action.payload
            const cartProductIds = state.cartProductIds;

            if(!cartProductIds.find(id => id === productId)){
                state.cartProductIds = [...state.cartProductIds, productId]
            }

            // state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        },
        removeFromCart: (state, action: PayloadAction<ProductApi["id"]>) => {
            const productId = action.payload;

            const { [productId]: removedProduct, ...remainingProducts } = state.cartProducts;
            state.cartProducts = remainingProducts;

            state.cartProductIds = state.cartProductIds.filter(id => id !== productId);

            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        },

        increaseQuantity: (state, action: PayloadAction<ProductApi["id"]>) => {
            const productId = action.payload;

            if (state.cartProducts[productId]) {
                const item = state.cartProducts[productId];
                item.amount = Math.min(item.amount + 1, 99);
            }

            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        },

        decreaseQuantity: (state, action: PayloadAction<ProductApi["id"]>) => {
            const productId = action.payload;

            if (state.cartProducts[productId]) {
                const item = state.cartProducts[productId];
                item.amount = Math.max(item.amount - 1, 1);
            }

            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        },

        setQuantity: (state, action: PayloadAction<{ id: ProductApi["id"], quantity: number }>) => {
            const productId = action.payload.id;
            let quantity = action.payload.quantity;

            quantity = Math.max(1, Math.min(quantity, 99));

            if (state.cartProducts[productId]) {
                state.cartProducts[productId].amount = quantity; 
            }

            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        }

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.getCartProductsByIds.matchFulfilled,
            (state, { payload }) => {
                const products: ProductsApi = payload;
                
                products.forEach(product => {
                    const productId = product.id;

                    if (!state.cartProducts[productId]) {
                        state.cartProducts[productId] = {
                            info: product,
                            amount: 1
                        };
                    }

                    state.cartInfo.totalPrice += product.price;
                });  
            }
        )
    }
})

const calculateTotalPrice = (items: CartState["cartProducts"]): number => {
    return Object.values(items).reduce((acc, item) => acc + item.amount * item.info.price, 0);
};

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;