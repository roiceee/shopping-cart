import React from "react";

declare global {
    interface ItemObject {
        id: string;
        name: string;
        src: string;
        price: number;
        stars: number;
      }
      interface SortStateInterface {
        sortBy: string;
        inverted: boolean;
      }

      interface ItemModalProps {
        modalShow: boolean;
        itemObj: ItemObject;
        setModalShow: React.Dispatch<React.SetStateAction<boolean>>
      }

      interface StarProps {
        size?: number;
        color?: string;
        fill?: string;
      }

      interface ItemProps {
        itemObj: ItemObject;
        setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
        setCurrentItem: React.Dispatch<React.SetStateAction<ItemObject>>;
      }
      interface HomeRowProps {
        image: string;
        title: string;
        buttonLinkToPath: string;
        description: string;
      }
}

export {};
