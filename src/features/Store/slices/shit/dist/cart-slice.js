// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ProductApi, ProductBusket, ProductsBusket } from "../../model/types";
// interface CartState{
//     cartItems: ProductsBusket;
//     cartInfo: {
//         totalPrice: number;
//     }
// }
// const initialState: CartState = {
//     cartItems: [],
//     cartInfo: {
//         totalPrice: 0,
//     }
// }
// const cartSlice = createSlice({
//     name: 'store-cart',
//     initialState: initialState,
//     reducers: {
//         addToCart: (state, action: PayloadAction<ProductApi["id"]>) => {
//             false;
//         }
//     }
// })
// addToCart: (productId) => {
//         const products = useProductsStore.getState().products;
//         const productsInCart = get().cartItems;
//         if(!productsInCart.find(product => product.info.id === productId)){
//             set({
//                 cartItems: [
//                     ...productsInCart,
//                     {
//                         info: products.find(product => product.id === productId),
//                         amount: 1,
//                     }
//                 ]
//             })
//         }
//     },
//     removeFromCart: (productId) => {
//         const productsInCart = get().cartItems;
//         set({cartItems: productsInCart.filter(product => product.info.id != productId)});
//     },
//     increaseQuantity: (productId) => {
//         const productsInCart = get().cartItems;
//         set({cartItems: productsInCart.map(item => 
//             item.info.id === productId ? {
//                 ...item,
//                 amount: ++item.amount > 99 ? 99 : item.amount, 
//             } : item
//         )})
//     },
//     decreaseQuantity: (productId) => {
//         const productsInCart = get().cartItems;
//         set({cartItems: productsInCart.map(item => 
//             item.info.id === productId ? {
//                 ...item,
//                 amount: --item.amount < 1 ? 1 : item.amount, 
//             } : item
//         )})
//     },
//     setQuantity: (productId, quantity) => {
//         const productsInCart = get().cartItems;
//         if(quantity < 1){
//             quantity = 1
//         }
//         if(quantity > 99){
//             quantity = 99;
//         }
//         set({cartItems: productsInCart.map(item => 
//             item.info.id === productId ? {
//                 ...item,
//                 amount: quantity, 
//             } : item
//         )})    }
