import { date } from "@dashboard/fixtures";
import { createFilterStructure } from "@dashboard/orders/components/OrderDraftListPage";
import { OrderDraftListUrlFilters } from "@dashboard/orders/urls";
import { getFilterQueryParams } from "@dashboard/utils/filters";
import { stringifyQs } from "@dashboard/utils/urls";
import { getExistingKeys, setFilterOptsStatus } from "@test/filters";
import { config } from "@test/intl";
import { createIntl } from "react-intl";

import { getFilterQueryParam, getFilterVariables } from "./filters";

describe("Filtering query params", () => {
  it("should be empty object if no params given", () => {
    const params: OrderDraftListUrlFilters = {};
    const filterVariables = getFilterVariables(params);

    expect(getExistingKeys(filterVariables)).toHaveLength(0);
  });
  it("should not be empty object if params given", () => {
    const params: OrderDraftListUrlFilters = {
      createdFrom: date.from,
      createdTo: date.to,
      customer: "admin@example.com",
    };
    const filterVariables = getFilterVariables(params);

    expect(getExistingKeys(filterVariables)).toHaveLength(2);
  });
});
describe("Filtering URL params", () => {
  const intl = createIntl(config);
  const filters = createFilterStructure(intl, {
    created: {
      active: false,
      value: {
        max: date.to,
        min: date.from,
      },
    },
    customer: {
      active: false,
      value: "admin@example.com",
    },
  });

  it("should be empty if no active filters", () => {
    const filterQueryParams = getFilterQueryParams(filters, getFilterQueryParam);

    expect(getExistingKeys(filterQueryParams)).toHaveLength(0);
  });
  it("should not be empty if active filters are present", () => {
    const filterQueryParams = getFilterQueryParams(
      setFilterOptsStatus(filters, true),
      getFilterQueryParam,
    );

    expect(filterQueryParams).toMatchSnapshot();
    expect(stringifyQs(filterQueryParams)).toMatchSnapshot();
  });
});
