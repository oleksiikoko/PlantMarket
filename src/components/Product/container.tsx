import * as React from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const queryString = require("query-string");

import ProductView from "./view";

interface ProductProps {
  match: any;
}

interface RouteParams {
  name: string;
}

const Product: React.FC<ProductProps> = (props) => {
  const [currency, setCurrency] = useState("CURRENCY:USD");
  const [style, setStyle] = useState(null);
  const [size, setSize] = useState(null);

  const { name } = useParams<RouteParams>();
  const { variant } = queryString.parse(useLocation().search);
  console.log(name, variant);

  return <ProductView />;
};

export default Product;
