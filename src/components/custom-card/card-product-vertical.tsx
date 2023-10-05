import React, { useState } from "react";
import { RatingEmptyStarIcon } from "../icons/rating-empty-star";
import { RatingFullStarIcon } from "../icons/rating-full-star";
import { RatingHalfStarIcon } from "../icons/rating-half-star";
import { formatCurrency } from "../../utils";
("../../utils/currency-format");
type CardProductVerticalProps = {
  image: string;
  description: string;
  rating: number;
  currentPrice: number;
  originPrice: number;
  sold: number;
};

const CardProductVertical = ({
  image,
  description,
  rating,
  currentPrice,
  originPrice,
  sold,
}: CardProductVerticalProps) => {
  const [floorRating] = useState(Math.floor(rating));
  return (
    <div className="w-1/2 rounded-md bg-white px-1 pb-5">
      <img src={image} style={{ width: "100%" }} height="100px" />
      <span className="card-product-vertical-des-text">{description}</span>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((e, i) => {
            if (i + 1 <= floorRating) return <RatingFullStarIcon />;
            else {
              if (i == floorRating && floorRating < rating)
                return <RatingHalfStarIcon />;
              return <RatingEmptyStarIcon />;
            }
          })}
        </div>
        {/* <div className="flex items-center  text-[#f2f2f2]">Đã bán: {sold}</div> */}
      </div>
      <div className="text-primary font-bold text-[20px]">
        {formatCurrency(currentPrice)} đ
      </div>
    </div>
  );
};

export default CardProductVertical;
