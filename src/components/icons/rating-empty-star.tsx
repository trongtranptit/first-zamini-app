import React, { FC } from "react";

export const RatingEmptyStarIcon: FC<{}> = () => {
  return (
    <svg
      fill="#fab23e"
      width="24"
      height="24"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fab23e"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <path d="M-448 -192H832V608H-448z" fill="none" />
      <path
        d="M37.675 26.643H56.01L41.176 37.42l5.666 17.438-14.833-10.777-14.834 10.777 5.666-17.438L8.008 26.643h18.335l5.666-17.438 5.666 17.438zm-8.407 4.026h-8.869l7.175 5.213-2.74 8.435 7.175-5.213 7.175 5.213-2.741-8.435 7.175-5.213h-8.869l-2.74-8.434-2.741 8.434z"
        fillRule="nonzero"
      />
    </svg>
  );
};
