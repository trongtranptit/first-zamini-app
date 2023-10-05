import React from "react";
import { GiftIcon } from "../../components/icons/gift";
import { MedalIcon } from "../../components/icons/medal";
import { StarIcon } from "../../components/icons/star";
import { WalletIcon } from "../../components/icons/wallet";

export const UserInfo: React.FunctionComponent = () => {
  return (
    <div className="rounded-md bg-white px-5 py-2 w-full my-5">
      <div className="flex items-center w-full">
        <div className="shrink-0 w-2/5">
          <span>Xin chào</span>
          <div className="text-primary font-bold">Trần Văn A</div>
        </div>
        <div className="shrink-0 w-3/5 flex items-center justify-between">
          <div className="shrink-0 flex items-center gap-2">
            <MedalIcon />
            <div>
              <span>hạng</span>
              <div className="text-primary font-bold">Thành viên</div>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <WalletIcon />
            <div>
              <span>Xu</span>
              <div className="text-primary font-bold">2,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex w-[170px] !shrink-0 px-4 py-3 bg-gray-100 items-center justify-center gap-3 rounded-md ">
          <StarIcon />
          <span className="text-primary font-bold  !text-[17px] ">Đổi quà</span>
        </div>
        <div className="flex w-[170px] !shrink-0 px-4 py-3 bg-gray-100 items-center justify-center gap-3 rounded-md ">
          <GiftIcon />
          <span className="text-primary font-bold  !text-[17px]  shrink-0">
            Quà của tôi
          </span>
        </div>
      </div>
    </div>
  );
};
