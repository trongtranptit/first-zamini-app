import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Page } from "zmp-ui";
import { useSetHeader } from "../hooks";
import { changeStatusBarColor } from "../services";
import { ProductList } from "./index/product-list";
import Medusa from "@medusajs/medusa-js";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
export const ProductPage: React.FunctionComponent = () => {
  const initVal: PricedProduct[] = [];
  const setHeader = useSetHeader();
  const [products, setProducts] = useState(initVal);

  const productHeader = useMemo(
    () => (
      <Input.Search
        placeholder="Tìm kiếm sản phẩm"
        onSearch={(keyword) => getProductList(keyword)}
        className="cus-input-search"
      />
    ),
    []
  );
  useEffect(() => {
    setHeader({
      customTitle: productHeader,
      hasLeftIcon: false,
      type: "secondary",
    });
    changeStatusBarColor("secondary");
  }, []);
  const getProductList = (keyword: string | undefined) => {
    const medusa = new Medusa({
      baseUrl: "http://localhost:9000",
      maxRetries: 3,
    });
    const key: string = keyword ? keyword : "";
    if (key) {
      medusa.products
        .search({
          q: key,
        })
        .then(({ hits }) => {
          console.log(hits.length);
          // setProducts(hits)
        });
    } else {
      medusa.products.list().then(({ products, limit, offset, count }) => {
        console.log(products.length);
        setProducts(products);
      });
    }
  };
  return (
    <Page>
      <ProductList products={products} />
    </Page>
  );
};
