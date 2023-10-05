import React, { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { Box, Text } from "zmp-ui";

export const NotificationIcon: FC<{ active?: boolean }> = ({ active }) => {
  return (
    <Box className="relative">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z"
            fill="#ffffff"
          />{" "}
          <path
            d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z"
            fill="#ffffff"
          />{" "}
        </g>
      </svg>
      <Box className="absolute -right-1 top-[-5px] text-center bg-background rounded-full">
        <Text
          className="w-5 h-5 bg-white rounded-full text-primary"
          size="xxxSmall"
        >
          1
        </Text>
      </Box>
    </Box>
  );
};
