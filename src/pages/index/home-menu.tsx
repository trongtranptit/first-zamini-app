import React from "react";
import { CouponIcon } from "../../components/icons/coupon";
import { FortuneWheelIcon } from "../../components/icons/fortune-wheel";
import { OrganizationIcon } from "../../components/icons/organization";
import { ShopIcon } from "../../components/icons/shop";
import HomeMenuItem from "../../components/home/home-menu-item";
import { HomeMenuItemProps } from "../../models";
const menus: HomeMenuItemProps[] = [
  {
    link: "",
    label: "Giải trí",
    icon: <FortuneWheelIcon />,
  },
  {
    link: "",
    label: "Mã giảm giá của tôi",
    icon: <CouponIcon />,
  },
  {
    link: "",
    label: "Cửa hàng",
    icon: <ShopIcon />,
  },
  {
    link: "",
    label: "Đội nhóm của tôi",
    icon: <OrganizationIcon />,
  },
];
export const HomeMenu: React.FunctionComponent = () => {
  return (
    <div className="flex justify-between">
      {menus.map((menu) => (
        <HomeMenuItem link={menu.link} icon={menu.icon} label={menu.label} />
      ))}
    </div>
  );
};
