import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Dropdown from "react-bootstrap/esm/Dropdown";
import _ from "lodash";
import { useParams } from "react-router-dom";
import fishData from "../../assets/mock-data/fish.json";
import aquariumData from "../../assets/mock-data/aquarium.json";
import Item from "./item";

interface ShopObject {
  id: string;
  name: string;
  src: string;
  price: number;
}

function Shop() {
  const params = useParams();
  const [sortState, setSortState] = React.useState<string>("");
  const [shopList, setShopList] = React.useState<Array<ShopObject>>(
    [] as Array<ShopObject>
  );

  const handleSortChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSortState(e.currentTarget.id);
  };

  const generateShopList = React.useCallback((): JSX.Element[] => {
    return shopList.map((shopItem) => {
      return (
        <Item
          key={shopItem.id}
          name={shopItem.name}
          src={shopItem.src}
          price={shopItem.price}
        />
      );
    });
  }, [shopList]);

  const sortArray = React.useCallback((): Array<ShopObject> => {
    let array: Array<ShopObject> = [];
    if (sortState === "name") {
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
    if (sortState === "price") {
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
    return array;
  }, [sortState]);

  React.useEffect(() => {
    setShopList(sortArray());
  }, [sortState]);

  React.useEffect(() => {
    generateShopList();
  }, [shopList]);

  React.useEffect(() => {
    if (params.id === "fish") {
      setShopList(fishData.arr);
      return;
    }
    if (params.id === "aquariums") {
      setShopList(aquariumData.arr);
      return;
    }
  }, [params]);

  return (
    <Container className="px-2">
      <Row className="my-2">
        <h1>{_.capitalize(params.id)}</h1>
        <Row className="row-cols-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort by:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleSortChange} id="name">
                Name
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSortChange} id="price">
                Price
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="my-2 px-0">{sortState === "" ? "None" : _.capitalize(sortState)}</p>
        </Row>
      </Row>
      <Row className="row-cols-auto gap-3 mb-3 justify-content-center">
        {generateShopList()}
      </Row>
    </Container>
  );
}

export default Shop;
