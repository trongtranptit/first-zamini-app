import { createDummyStore, getStoreInfo } from "./dummy/utils";
import { atom, selector } from "recoil";
import {
  Address,
  HeaderType,
  StoreOrder,
  Product,
  ProductInfoPicked,
  Store,
  DemoStore,
} from "./models";
import { getRandomInt } from "./utils";
import { filter } from "./constants/referrence";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useEffect } from "react";

export const storeState = selector<DemoStore>({
  key: "store",
  get: () => {
    // return createDummyStore();
    // useEffect()
    return getStoreInfo();
  },
});

export const productState = selector<PricedProduct[]>({
  key: "product",
  get: ({ get }) => {
    const store = get(storeState);
    return store.listProducts || [];
  },
});

export const cartState = atom<StoreOrder>({
  key: "cart",
  default: {
    status: "pending",
    listOrder: [],
    date: new Date(),
  },
});

export const cartTotalPriceState = selector<number>({
  key: "cartTotalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    const products = get(productState);
    const result = cart.listOrder.reduce(
      (total, item) => total + Number(item.order.quantity) * 2, // chua lam phan gia san pham
      0
    );
    return result;
  },
});

export const headerState = atom<HeaderType>({
  key: "header",
  default: {},
});

export const searchProductState = atom<string>({
  key: "searchProduct",
  default: "",
});

export const activeCateState = atom<number>({
  key: "activeCate",
  default: 0,
});

export const activeFilterState = atom<string>({
  key: "activeFilter",
  default: filter[0].key,
});

export const storeProductResultState = selector<PricedProduct[]>({
  key: "storeProductResult",
  get: ({ get }) => {
    get(activeCateState);
    get(searchProductState);

    const store = get(storeState);
    const pos = getRandomInt(store.listProducts.length - 122, 0);
    const num = getRandomInt(120, 50);
    return [...store.listProducts.slice(pos, pos + num)];
  },
});

export const addressState = atom<Address>({
  key: "address",
  default: {
    city: "",
    district: "",
    ward: "",
    detail: "",
  },
});

export const openProductPickerState = atom<boolean>({
  key: "openProductPicker",
  default: false,
});

export const initialProductInfoPickedState = {
  productId: -1,
  isUpdate: false,
};

export const productInfoPickedState = atom<ProductInfoPicked>({
  key: "productInfoPicked",
  default: initialProductInfoPickedState,
});
