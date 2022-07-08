import { useReducer } from "react";
import { Button, Card, CardBody, CardImg, CardTitle, Input } from "reactstrap";
import classes from "./productsView.module.css";

const products = [
  {
    id: 1,
    name: "Black",
    img: "img/black-mulch.jpg",
    price: 15.0,
    checkoutLink:
      "https://checkout.square.site/merchant/MLQNHB0PE667N/checkout/CWZPXSDSHPFATZ45IUD6U3BZ",
  },
  { id: 2, name: "Brown", img: "img/brown-mulch.jpg", price: 15.0 },
  {
    id: 3,
    name: "Red",
    img: "img/red-mulch.jpg",
    checkoutLink: "https://square.link/u/NAfpzk51",
    price: 15.0,
  },
  { id: 4, name: "Natural HardWood", img: "img/wood-mulch.jpg", price: 15.0 },
];

const getProduct = (id) => {
  return products.find((p) => p.id === id);
};

const initialState = {
  selectedId: 0,
  products: products,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "select":
      return { ...state, selectedId: action.value };
    case "openOrder":
      return { ...state, openOrder: action.value };
    default:
      throw new Error();
  }
};

export const ProductsView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="Products" className={classes.productsView}>
      <div className={classes.title}>Choose Color</div>
      <div className={`${classes.productList}`}>
        {state.products.map((product) => {
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
                src={product.img}
                width="100%"
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
                  onClick={() => {
                    window.open(
                      getProduct(state.selectedId).checkoutLink,
                      "_blank"
                    );
                  }}
                >
                  Purchase
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
