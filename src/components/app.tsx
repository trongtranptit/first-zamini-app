import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Spinner,
} from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages/index";
import ProductPicker from "./product-picker";
import DetailProduct from "../pages/detail-product";
import Header from "./header";
import { ConfigProvider, getConfig } from "./config-provider";
import { hexToRgb } from "../utils";
import { Layout } from "./layout";
const FinishOrder = React.lazy(() => import("../pages/finish-order"));

const MyApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
          "--zmp-primary-color-rgb": hexToRgb(
            getConfig((c) => c.template.primaryColor)
          ),
        }}
      >
        <App>
          <Suspense
            fallback={
              <div className=" w-screen h-screen flex justify-center items-center">
                <Spinner />
              </div>
            }
          >
            <SnackbarProvider>
              <ZMPRouter>
                <Header />
                <Layout />
                <ProductPicker />
              </ZMPRouter>
            </SnackbarProvider>
          </Suspense>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
