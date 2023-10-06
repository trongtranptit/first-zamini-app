import { useVirtualKeyboardVisible } from "../hooks/useVirtualKeyboardVisible";
import React, { FC, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "../models";
import { BottomNavigation, Icon } from "zmp-ui";
import { CartIcon } from "./icons/cart";
import { HomeIcon } from "./icons/home";
import { ProductIcon } from "./icons/product";
import { ProfileIcon } from "./icons/profile";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <HomeIcon />,
    activeIcon: <HomeIcon active />,
  },
  "/product": {
    label: "Sản phẩm",
    icon: <ProductIcon />,
    activeIcon: <ProductIcon active />,
  },
  "/cart": {
    label: "Giỏ hàng",
    icon: <CartIcon />,
    activeIcon: <CartIcon active />,
  },
  "/profile": {
    label: "Tài khoản",
    icon: <ProfileIcon />,
    activeIcon: <ProfileIcon active />,
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category"];

export const Navigation: FC = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("/");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav || keyboardVisible) {
    return <></>;
  }

  return (
    <BottomNavigation
      id="footer"
      activeKey={activeTab}
      onChange={(key: TabKeys) => setActiveTab(key)}
      className="z-50"
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </BottomNavigation>
  );
};
