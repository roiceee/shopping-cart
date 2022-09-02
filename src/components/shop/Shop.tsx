import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Dropdown from "react-bootstrap/esm/Dropdown";
import _ from "lodash";
import { useParams } from "react-router-dom";
import fishData from "../../assets/mock-data/fish.json";
import aquariumData from "../../assets/mock-data/aquarium.json";
import ItemCard from "./shop-components/item";
import invertIcon from "../../assets/images/invert.png";
import ItemModal from "./shop-components/item-modal";
import "./shop.css";
import { sortArray, invertArray } from "../../utils/shop-utils/sorter";
import { defaultItemObject } from "../../utils/defaults";

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
  const [shopList, setShopList] = React.useState<Array<ItemObject>>(
    [] as Array<ItemObject>
  );
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [currentItem, setCurrentItem] =
    React.useState<ItemObject>(defaultItemObject);

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
    return shopList.map((itemObj) => {
      return (
        <ItemCard
          key={itemObj.id}
          itemObj={itemObj}
          setModalShow={setModalShow}
          setCurrentItem={setCurrentItem}
        />
      );
    });
  }, [shopList]);

  React.useEffect(() => {
    setShopList(sortArray(shopList, sortState.sortBy));
  }, [sortState.sortBy]);

  React.useEffect(() => {
    setShopList(invertArray(shopList));
  }, [sortState.inverted]);

  React.useEffect(() => {
    generateShopList();
  }, [shopList]);

  React.useEffect(() => {
    setParamsState(params);
  }, [params]);

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

  return (
    <>
      <Container>
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
              {sortState.sortBy === ""
                ? "None"
                : _.capitalize(sortState.sortBy)}
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
      <ItemModal
        modalShow={modalShow}
        itemObj={currentItem}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default Shop;
