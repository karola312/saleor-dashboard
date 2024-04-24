import { ConditionalProductFilterProvider } from "@dashboard/components/ConditionalFilter/context";
import { useFlag } from "@dashboard/featureFlags";
import { sectionNames } from "@dashboard/intl";
import { asSortParams } from "@dashboard/utils/sort";
import { getArrayQueryParam } from "@dashboard/utils/urls";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Routes } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  productAddPath,
  ProductCreateUrlQueryParams,
  productImagePath,
  ProductImageUrlQueryParams,
  productListPath,
  ProductListUrlQueryParams,
  ProductListUrlSortField,
  productPath,
  ProductUrlQueryParams,
  productVariantAddPath,
  ProductVariantAddUrlQueryParams,
  productVariantEditPath,
  ProductVariantEditUrlQueryParams,
} from "./urls";
import ProductCreateComponent from "./views/ProductCreate";
import ProductImageComponent from "./views/ProductImage";
import ProductListComponent from "./views/ProductList";
import ProductUpdateComponent from "./views/ProductUpdate";
import ProductVariantComponent from "./views/ProductVariant";
import ProductVariantCreateComponent from "./views/ProductVariantCreate";

interface MatchParams {
  id?: string;
}

interface matchParamsProductVariant {
  variantId?: string;
  productId?: string;
}

const ProductList: React.FC<RouteComponentProps<any>> = ({ location }) => {
  const qs = parseQs(location.search.substr(1)) as any;
  const productListingPageFiltersFlag = useFlag("product_filters");

  const params: ProductListUrlQueryParams = asSortParams(
    {
      ...qs,
      categories: getArrayQueryParam(qs.categories),
      collections: getArrayQueryParam(qs.collections),
      ids: getArrayQueryParam(qs.ids),
      productTypes: getArrayQueryParam(qs.productTypes),
      productKind: qs.productKind,
    },
    ProductListUrlSortField,
  );

  return (
    <ConditionalProductFilterProvider
      locationSearch={
        productListingPageFiltersFlag.enabled ? location.search : ""
      }
    >
      <ProductListComponent params={params} />
    </ConditionalProductFilterProvider>
  );
};

const ProductUpdate: React.FC<RouteComponentProps<any>> = ({ match }) => {
  const qs = parseQs(location.search.substr(1)) as any;
  const params: ProductUrlQueryParams = qs;

  return (
    <ProductUpdateComponent
      id={decodeURIComponent(match.params.id)}
      params={{
        ...params,
        ids: getArrayQueryParam(qs.ids),
      }}
    />
  );
};

const ProductCreate: React.FC<RouteComponentProps<any>> = () => {
  const qs = parseQs(location.search.substr(1));
  const params: ProductCreateUrlQueryParams = qs;

  return <ProductCreateComponent params={params} />;
};

const ProductVariant: React.FC<
  RouteComponentProps<matchParamsProductVariant>
> = ({ match }) => {
  const qs = parseQs(location.search.substr(1));
  const params: ProductVariantEditUrlQueryParams = qs;

  return (
    <ProductVariantComponent
      variantId={decodeURIComponent(match.params.variantId ?? "")}
      productId={decodeURIComponent(match.params.productId ?? "")}
      params={params}
    />
  );
};

const ProductImage: React.FC<RouteComponentProps<any>> = ({
  location,
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: ProductImageUrlQueryParams = qs;

  return (
    <ProductImageComponent
      mediaId={decodeURIComponent(match.params.imageId)}
      productId={decodeURIComponent(match.params.productId)}
      params={params}
    />
  );
};

const ProductVariantCreate: React.FC<RouteComponentProps<MatchParams>> = ({
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: ProductVariantAddUrlQueryParams = qs;

  return (
    <ProductVariantCreateComponent
      productId={decodeURIComponent(match.params.id ?? "")}
      params={params}
    />
  );
};

const Component = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.products)} />
      <Routes>
        <Route path={productListPath} element={ProductList} />
        <Route path={productAddPath} element={ProductCreate} />
        <Route
          path={productVariantAddPath(":id")}
          element={ProductVariantCreate}
        />
        <Route
          path={productVariantEditPath(":productId", ":variantId")}
          element={ProductVariant}
        />
        <Route
          path={productImagePath(":productId", ":imageId")}
          element={ProductImage}
        />
        <Route path={productPath(":id")} element={ProductUpdate} />
      </Routes>
    </>
  );
};

export default Component;
