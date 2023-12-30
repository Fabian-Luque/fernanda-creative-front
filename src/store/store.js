import {create} from 'zustand';

let useCartStore = ((set, get) => ({
    cartItems: [],
    addItemToCart: (item) => {
        set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    },
}))

export const useStore = create(useCartStore);