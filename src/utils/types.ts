import React from "react";

declare global {
    interface ItemObject {
        id: string;
        name: string;
        src: string;
        price: number;
        stars: number;
      }

      interface CartItemObject {
        itemProperties: ItemObject;
        quantity: number;
      }

      interface CartObject {
        items: Array<CartItemObject>
      }

}

export {};
