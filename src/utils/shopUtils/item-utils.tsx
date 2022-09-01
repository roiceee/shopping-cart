import * as React from 'react';
import Star from "../../components/shop/shop-components/star";

function generateStars(num: number): JSX.Element[] {
    const starArray: JSX.Element[] = [];
    for (let i = 0; i < num; i++) {
      starArray.push(<Star key={i + 1}/>);
    }
    return starArray;
  }

  export {generateStars};