import { PromotionTypeEnum } from "@dashboard/graphql";
import React, { ReactNode } from "react";

import { useConditionLeftOptions } from "../hooks/useConditionLeftOptions";
import { useCondtionTypes } from "../hooks/useConditionTypes";
import { useCondtionRightOptions } from "../hooks/useCondtionRightOptions";
import { discountRulesContext } from "./context";

export const DiscountRulesContextProvider = ({
  discountType,
  children,
  channel,
}: {
  children: ReactNode;
  discountType: PromotionTypeEnum;
  channel: string;
}) => {
  const { options: conditionLeftOptions } =
    useConditionLeftOptions(discountType);
  const { getConditionTypesOptions, getConditionInputTypeByLabel } =
    useCondtionTypes();
  const { getFetchProps } = useCondtionRightOptions(channel);

  return (
    <discountRulesContext.Provider
      value={{
        conditionLeftOptions,
        discountType,
        getConditionTypesOptions,
        getConditionInputTypeByLabel,
        getFetchProps,
      }}
    >
      {children}
    </discountRulesContext.Provider>
  );
};