declare global {
    interface ItemObject {
        id: string;
        name: string;
        src: string;
        price: number;
        stars: number;
      }

      interface CartItemObject {
        transactionNumber: string;
        itemProperties: ItemObject;
        quantity: number;
      }

      interface CartObject {
        items: Array<CartItemObject>
      }

}

export {};
