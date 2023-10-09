import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React, { FunctionComponent } from "react";
import CardProductVertical from "../../components/custom-card/card-product-vertical";

export const ProductList: FunctionComponent<{ products: PricedProduct[] }> = ({
  products,
}) => {
  // useEffect(() => {
  //   console.log("listVariants: ", processGetAdminVariants.variants);
  // }, [processGetAdminVariants.isLoading]);
  return (
    <div className="flex flex-wrap">
      {products &&
        products.length > 0 &&
        products.map((product, i) => (
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
