import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Page } from "zmp-ui";
import { useSetHeader } from "../hooks";
import { changeStatusBarColor } from "../services";
import { ProductList } from "./index/product-list";

export const ProductPage: React.FunctionComponent = () => {
  const setHeader = useSetHeader();
  const [keyword, setKeyword] = useState("");

  const handleInputSearch = () => {};

  const productHeader = useMemo(
    () => (
      <Input.Search
        placeholder="Tìm kiếm sản phẩm"
        onSearch={handleInputSearch}
        className="cus-input-search"
      />
    ),
    []
  );
  useEffect(() => {
    setHeader({
      customTitle: "",
      hasLeftIcon: false,
      type: "secondary",
    });
    changeStatusBarColor("secondary");
  }, []);

  return (
    <Page>
      <ProductList keyword={keyword} />
    </Page>
  );
};
