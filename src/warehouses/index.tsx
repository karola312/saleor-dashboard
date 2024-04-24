import { sectionNames } from "@dashboard/intl";
import { asSortParams } from "@dashboard/utils/sort";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Routes } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  warehouseAddPath,
  warehouseListPath,
  WarehouseListUrlQueryParams,
  WarehouseListUrlSortField,
  warehousePath,
  WarehouseUrlQueryParams,
} from "./urls";
import WarehouseCreate from "./views/WarehouseCreate";
import WarehouseDetailsComponent from "./views/WarehouseDetails";
import WarehouseListComponent from "./views/WarehouseList";

const WarehouseList: React.FC<RouteComponentProps> = ({ location }) => {
  const qs = parseQs(location.search.substr(1)) as any;
  const params: WarehouseListUrlQueryParams = asSortParams(
    qs,
    WarehouseListUrlSortField,
  );

  return <WarehouseListComponent params={params} />;
};

const WarehouseDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  location,
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: WarehouseUrlQueryParams = qs;
  return (
    <WarehouseDetailsComponent
      id={decodeURIComponent(match.params.id)}
      params={params}
    />
  );
};

export const WarehouseSection: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.warehouses)} />
      <Routes>
        <Route path={warehouseListPath} element={WarehouseList} />
        <Route path={warehouseAddPath} element={WarehouseCreate} />
        <Route path={warehousePath(":id")} element={WarehouseDetails} />
      </Routes>
    </>
  );
};
export default WarehouseSection;
