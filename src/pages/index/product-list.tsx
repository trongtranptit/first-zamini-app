import { PriceList } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useProduct, useProducts } from "medusa-react";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CardProductVertical from "../../components/custom-card/card-product-vertical";
import { storeProductResultState } from "../../state";
export const ProductList: FunctionComponent = () => {
  const initVal: PricedProduct[] = [];
  const { products, isLoading } = useProducts();
  const [listProducts, setListProducts] = useState(initVal);
  // const listProducts: PricedProduct[] = [];
  useEffect(() => {
    setListProducts(products || []);
  }, [isLoading]);
  console.log("listProducts: ", listProducts);
  return (
    <div className="flex flex-wrap">
      {listProducts &&
        listProducts.length > 0 &&
        listProducts.map((product) => (
          <CardProductVertical
            image={(product.images && product.images[0]?.url) || ""}
            description={product.title || ""}
            currentPrice={1000}
            originPrice={1000}
            rating={3.5}
            sold={0}
          />
        ))}
    </div>
  );
};
