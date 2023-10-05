import React, { useEffect, useMemo, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Icon, Input, Page } from "zmp-ui";
import ButtonFixed from "../../components/button-fixed/button-fixed";
import ButtonPriceFixed from "../../components/button-fixed/button-price-fixed";
import CategoriesStore from "../../components/categories-store";
import CardProductHorizontal from "../../components/custom-card/card-product-horizontal";
import CardShop from "../../components/custom-card/card-shop";

import { filter } from "../../constants/referrence";
import { Product } from "../../models";
import {
  activeCateState,
  activeFilterState,
  cartState,
  cartTotalPriceState,
  searchProductState,
  storeProductResultState,
  storeState,
} from "../../state";
import { useNavigate } from "react-router-dom";
import useSetHeader from "../../hooks/useSetHeader";
import { changeStatusBarColor } from "../../services";
import { getConfig } from "../../components/config-provider";
import { CoinIcon } from "../../components/icons/coin";
import { NotificationIcon } from "../../components/icons/notification";
import { CartHeaderIcon } from "../../components/icons/cartHeader";
import { UserInfo } from "./user-info";
import { HomeMenu } from "./home-menu";
import { HomeSlide } from "./slide";
import { ProductList } from "./product-list";
// new
const HomePage: React.FunctionComponent = () => {
  const setHeader = useSetHeader();
  const [timeCountdown, setTimeCountDown] = useState(15 * 60);

  const homeHeader = useMemo(
    () => (
      <div className="px-5 flex items-center justify-between" id="home-header">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="home-header-text !w-[30px]">
              {Math.floor(timeCountdown / 60)}
            </span>
            <span className="text-white">: </span>
            <span className="home-header-text !w-[30px]">
              {timeCountdown % 60}
            </span>
          </div>
          <div className="flex gap-1 home-header-text items-center">
            +10,000
            <CoinIcon />
          </div>
        </div>
        <div className="flex items-center gap-3 pr-[100px]">
          <div className="flex items-center gap-1">
            <NotificationIcon />
            <CartHeaderIcon />
          </div>
        </div>
      </div>
    ),
    []
  );

  useEffect(() => {
    setHeader({
      customTitle: getConfig((c) => c.template.searchBar) ? homeHeader : "",
      hasLeftIcon: false,
      type: "secondary",
    });
    changeStatusBarColor("secondary");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeCountDown(timeCountdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Page>
      <UserInfo />
      <HomeMenu />
      <HomeSlide />
      <ProductList />
    </Page>
  );
};

export default HomePage;
