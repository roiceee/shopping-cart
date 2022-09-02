import _ from "lodash";

function sortArray(array :Array<ItemObject>, mode : string): Array<ItemObject> {
    let newArray: Array<ItemObject> = [];
    if (mode === "name") {
      newArray = array.slice(0).sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (mode === "price") {
      newArray = array.slice(0).sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    }
    if (mode === "stars") {
      newArray = array.slice(0).sort((a, b) => {
        if (a.stars < b.stars) {
          return 1;
        }
        if (a.stars > b.stars) {
          return -1;
        }
        return 0;
      });
    }
    if (mode === "") {
      return array;
    }
    return newArray;
  }

  function invertArray(array: Array<ItemObject>): Array<ItemObject>{
    const newArray : Array<ItemObject> = array.slice(0);
    return _.reverse(newArray);
  }

export {sortArray, invertArray}