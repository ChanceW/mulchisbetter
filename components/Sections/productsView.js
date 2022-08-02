import { useReducer } from "react";
import { Button, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Data } from "../../data";
import { ImgCarouselModal } from "../modal/img-carousel-modal";
import classes from "./productsView.module.css";
import { Images, CurrencyDollar, GeoAlt } from "react-bootstrap-icons";

const getProduct = (id) => {
  return Data.products.find((p) => p.id === id);
};

const initialState = {
  selectedId: 0,
  products: Data.products,
  isPreview: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "select":
      return { ...state, selectedId: action.value };
    case "togglePreview":
      return { ...state, isPreview: action.value };
    default:
      throw new Error();
  }
};

export const ProductsView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openPreview = () => {
    dispatch({ type: "togglePreview", value: true });
  };
  const closePreview = () => {
    dispatch({ type: "togglePreview", value: false });
  };

  return (
    <div id="Products" className={classes.productsView}>
      <div className={classes.title}>Choose Your Color</div>
      <div className={classes.servingLink}>
        <a href="#serving">
          <GeoAlt />
          <span className="m-1">Check if you are in a serving city</span>
        </a>
      </div>
      <div className={`${classes.productList}`}>
        {state.products.map((product) => {
          const purchase = () => {
            window.open(getProduct(state.selectedId).checkoutLink, "_blank");
          };

          return (
            <Card
              key={product.id}
              className={`${classes.productCard} ${
                product.id === state.selectedId && classes.selected
              }`}
              onClick={() => {
                dispatch({ type: "select", value: product.id });
              }}
            >
              <CardImg
                alt={`${product.name} Mulch`}
                src={product.imgs.find((i) => true)}
                className={classes.productImg}
              />
              <CardBody>
                <CardTitle className={classes.productTitle} tag="h5">
                  {product.name}
                </CardTitle>
              </CardBody>
              <div className={classes.purchaseInput}>
                <Button
                  color="info"
                  className={classes.button}
                  onClick={openPreview}
                  title="Preview"
                >
                  <Images size="25" />
                </Button>
                <Button
                  color="info"
                  className={classes.button}
                  onClick={purchase}
                  title="Purchase"
                >
                  <CurrencyDollar size="25" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {state.isPreview && (
        <ImgCarouselModal
          product={getProduct(state.selectedId)}
          close={closePreview}
        />
      )}
    </div>
  );
};
