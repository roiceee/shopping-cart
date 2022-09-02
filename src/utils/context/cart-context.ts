import * as React from "react";
import { defaultCartObject } from "../defaults";

interface CartContextInterface {
    cartState: CartObject,
    setCartState: React.Dispatch<React.SetStateAction<CartObject>>
}

const CartContext = React.createContext<CartContextInterface>({
    cartState: defaultCartObject,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCartState: () => {}
});

export default CartContext;
