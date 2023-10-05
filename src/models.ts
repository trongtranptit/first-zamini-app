import { ProductVariant } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ReactNode } from "react";

export type OrderStatus = "pending" | "shipping" | "finish";

export type Options = {
  name: string;
  title: string;
  option: {
    value: string;
    label: string;
    checked?: boolean;
  }[];
};

export type CartProduct = {
  id: number;
  order: {
    quantity: number;
    note: string;
    [key: string]: any;
  };
};

export type Cart = CartProduct[];

export type Product = {
  id: number;
  imgProduct: string;
  nameProduct: string;
  salePrice: number | string;
  retailPrice: number | string;
  description: string;
  options: Options[];
};

export type Store = {
  id: number;
  logoStore: string;
  bannerStore: string;
  nameStore: string;
  followers: number;
  address: string;
  type: "personal" | "business";
  categories: string[];
  listProducts: Product[];
};

export type StoreOrder = {
  status: OrderStatus;
  listOrder: CartProduct[];
  date: Date;
  address?: Address;
};

export type SectionProductsProps = {
  id?: number;
  title: string;
  watchMore?: boolean;
  pathBanner?: string;
  direction?: "vertical" | "horizontal";
  colPercentage?: number;
  children?: (data: Product | Store) => ReactNode;
  data: any;
  onChoose?: () => void;
};

export type OrderStoreProps = {
  keyStore: number;
  listPickupItems: { keyItem: number; quantity: number }[];
};

export type Address = {
  city: string;
  district: string;
  ward: string;
  detail: string;
};

export type HeaderType = {
  route?: string;
  hasLeftIcon?: boolean;
  title?: string;
  customTitle?: ReactNode;
  type?: "primary" | "secondary";
  rightIcon?: ReactNode;
};

export type AddressFormType = {
  name: "detail" | "city" | "district" | "ward";
  label: string;
  type: "text" | "select";
  placeholder: string;
  isValidate: boolean;
  errorMessage?: string;
};

export type ProductInfoPicked = {
  productId: number;
  isUpdate?: boolean;
};

export interface MenuItem {
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
}

export type HomeMenuItemProps = {
  link: string;
  label: string;
  icon: ReactNode;
};

export type DemoProduct = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  handle: string | null;
  is_giftcard: boolean;
  status: string;
  thumbnail: string | null;
  profile_id: string;
  weight: number | null;
  length: number | null;
  height: number | null;
  width: number | null;
  hs_code: string | null;
  origin_country: string;
  mid_code: string | null;
  material: string | null;
  collection_id: string | null;
  type_id: string | null;
  discountable: boolean;
  external_id: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  metadata: object | null;
};

export type DemoStore = {
  listProducts: PricedProduct[];
  listProductVariants: ProductVariant[];
};
