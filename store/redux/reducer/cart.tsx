import { Cart, Product } from "@/types";
import type { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

let initCart: string | null= null;
if (typeof window !== "undefined") {
  initCart = localStorage.getItem("shoppingCart");
}

const initialState: Cart[] = initCart ? JSON.parse(initCart) : [];

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const isInCart = state.some(
        (product) => product.title === action.payload.title
      );
      if (!isInCart) {
        const newCartProduct = {
          id: state.length + 1,
          title: action.payload.title,
          price: action.payload.price.price,
          image: action.payload.media.path,
          count: 1,
        };
        state.push(newCartProduct);
      } else {
        const copyCart = [...state];
        copyCart.map((product) => {
          if (product.title === action.payload.title) {
            product.count += 1;
          }
          return product;
        });
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const newState = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("shoppingCart", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;

export const selectCart = (state: RootState) => state.cart;

export default slice.reducer;
