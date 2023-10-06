import { PriceList } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useAdminVariants, useProduct, useProducts } from "medusa-react";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CardProductVertical from "../../components/custom-card/card-product-vertical";
import { storeProductResultState } from "../../state";
type ProcessGetProductListProps = {
  products: PricedProduct[];
  isLoading: boolean;
};
export const ProductList: FunctionComponent<{ keyword?: string }> = (
  keyword
) => {
  const initVal: PricedProduct[] = [];
  const [tempProcess, setTempProcess] = useState({
    products: initVal,
    isLoading: false,
  });
  useEffect(() => {
    const processGetProductList = useProducts();
    setTempProcess({});
    console.log("use effect: ", processGetProductList);
  }, [keyword]);
  const [listProducts, setListProducts] = useState(initVal);
  const [isLoading, setIsLoading] = useState(true);

  const processGetAdminVariants = useQuery({
    queryKey: ["data"],
    queryFn: () => Promise.resolve(5),
  });
  // const listProducts: PricedProduct[] = [];
  useEffect(() => {
    setListProducts(processGetProductList.products || []);
    console.log("nested useeffect: ", processGetProductList.products);
    console.log("listProducts: ", listProducts);
  }, [processGetProductList.isLoading]);
  // useEffect(() => {
  //   console.log("listVariants: ", processGetAdminVariants.variants);
  // }, [processGetAdminVariants.isLoading]);
  return (
    <div className="flex flex-wrap">
      {listProducts &&
        listProducts.length > 0 &&
        listProducts.map((product, i) => (
          <CardProductVertical
            key={i}
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
