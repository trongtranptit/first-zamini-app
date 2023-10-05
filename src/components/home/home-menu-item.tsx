import React, { ReactNode } from "react";
import { HomeMenuItemProps } from "../../models";

const HomeMenuItem = ({ link, label, icon }: HomeMenuItemProps) => {
  return (
    <div className="flex-1 h-full flex items-center justify-between flex-col mb-5 cursor-pointer">
      <div className="h-[80px]">
        <div className="rounded-full flex items-center justify-center bg-orange-100 p-3">
          {icon}
        </div>
      </div>
      <div className="text-black text-center ">{label}</div>
    </div>
  );
};

export default HomeMenuItem;
