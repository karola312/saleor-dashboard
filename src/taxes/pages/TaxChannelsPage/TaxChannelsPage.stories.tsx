// @ts-strict-ignore
import { countries } from "@dashboard/fixtures";
import { CountryFragment } from "@dashboard/graphql";
import Decorator from "@dashboard/storybook/Decorator";
import { taxConfigurations } from "@dashboard/taxes/fixtures";
import { storiesOf } from "@storybook/react";
import React from "react";

import TaxChannelsPage from "./TaxChannelsPage";

export const castedCountries = countries.map(
  ({ code, name }): CountryFragment => ({
    code,
    country: name,
    __typename: "CountryDisplay",
  }),
);

const props = {
  taxConfigurations,
  selectedConfigurationId: taxConfigurations[0].id,
  handleTabChange: () => undefined,
  allCountries: castedCountries,
  isDialogOpen: false,
  openDialog: () => undefined,
  closeDialog: () => undefined,
  onSubmit: () => undefined,
  savebarState: "default" as const,
  disabled: false,
};

storiesOf("Taxes / Channels view", module)
  .addDecorator(Decorator)
  .add("loading", () => (
    <TaxChannelsPage {...props} taxConfigurations={undefined} />
  ))
  .add("default", () => <TaxChannelsPage {...props} />)
  .add("add country", () => <TaxChannelsPage {...props} isDialogOpen={true} />);
