import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Dropdown from "react-bootstrap/esm/Dropdown";
import _ from "lodash";
import { useParams } from "react-router-dom";
import fishData from "../../assets/mock-data/fish.json";
import aquariumData from "../../assets/mock-data/aquarium.json";
import Item from "./item";
import invertIcon from "../../assets/images/invert.png";
import "./shop.css";

interface ShopObject {
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

function Shop() {
  const params = useParams();
  const [paramsState, setParamsState] = React.useState(params);
  const [sortState, setSortState] = React.useState<SortStateInterface>({
    sortBy: "",
    inverted: false,
  });
  const [shopList, setShopList] = React.useState<Array<ShopObject>>(
    [] as Array<ShopObject>
  );

  const handleSortByChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSortState((prevSortState) => ({
      ...prevSortState,
      sortBy: e.currentTarget.id,
    }));
  };

  const handleSortInvertedChange = (): void => {
    setSortState((prevSortState) => ({
      ...prevSortState,
      inverted: !prevSortState.inverted,
    }));
  };

  const generateShopList = React.useCallback((): JSX.Element[] => {
    return shopList.map((shopItem) => {
      return (
        <Item
          key={shopItem.id}
          name={shopItem.name}
          src={shopItem.src}
          price={shopItem.price}
          stars={shopItem.stars}
        />
      );
    });
  }, [shopList]);

  const sortArray = React.useCallback((): Array<ShopObject> => {
    let array: Array<ShopObject> = [];
    if (sortState.sortBy === "name") {
      array = shopList.slice(0).sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (sortState.sortBy === "price") {
      array = shopList.slice(0).sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    }
    if (sortState.sortBy === "stars") {
      array = shopList.slice(0).sort((a, b) => {
        if (a.stars < b.stars) {
          return 1;
        }
        if (a.stars > b.stars) {
          return -1;
        }
        return 0;
      });
    }
    if (sortState.sortBy === "") {
      return shopList;
    }
    return array;
  }, [sortState.sortBy]);

  const invertArray = React.useCallback((): Array<ShopObject> => {
    const shopListCopy = shopList.slice(0);
    return _.reverse(shopListCopy);
  }, [shopList]);

  React.useEffect(() => {
    setShopList(sortArray());
  }, [sortState.sortBy]);

  React.useEffect(() => {
    setShopList(invertArray());
  }, [sortState.inverted]);

  React.useEffect(() => {
    generateShopList();
  }, [shopList]);

  React.useEffect(() => {
    setSortState({
      sortBy: "",
      inverted: false,
    });
    if (paramsState.id === "fish") {
      setShopList(fishData.arr);
      return;
    }
    if (paramsState.id === "aquariums") {
      setShopList(aquariumData.arr);
      return;
    }
  }, [paramsState]);

  React.useEffect(() => {
    setParamsState(params);
  }, [params]);

  return (
    <Container className="px-2">
      <Row className="my-2">
        <h1>{_.capitalize(paramsState.id)}</h1>
        <Row className="row-cols-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort by:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleSortByChange} id="name">
                Name
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSortByChange} id="price">
                Price
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSortByChange} id="stars">
                Stars
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="my-2 px-0">
            {sortState.sortBy === "" ? "None" : _.capitalize(sortState.sortBy)}
          </p>
          <img
            src={invertIcon}
            style={{ height: "20px", width: "20px" }}
            alt="invert-icon"
            className="px-0 mx-2 align-self-center"
            id="invert-icon"
            onClick={handleSortInvertedChange}
          />
        </Row>
      </Row>
      <Row className="row-cols-auto gap-3 mb-3 justify-content-center">
        {generateShopList()}
      </Row>
    </Container>
  );
}

export default Shop;
