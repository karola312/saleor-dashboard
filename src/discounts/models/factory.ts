import { PromotionRuleDetailsFragment } from "@dashboard/graphql";

import { RuleType } from "../types";
import { CatalogRule } from "./Catalog/CatalogRule";
import { Rule } from "./index";
import { OrderRule } from "./Order/OrderRule";

export const createEmptyRule = (type: RuleType) => {
  if (type === "catalog") {
    return CatalogRule.empty();
  }

  if (type === "order") {
    return OrderRule.empty();
  }

  return null;
};

export const createRuleFromData = (data: Rule) => {
  if (data.type === "catalog") {
    return CatalogRule.fromFormValues(data);
  }

  if (data.type === "order") {
    return OrderRule.fromFormValues(data);
  }

  return null;
};

export const createRuleFromAPI = (
  type: RuleType,
  ruleData: PromotionRuleDetailsFragment,
  labelMap: Record<string, string>,
) => {
  if (type === "catalog") {
    return CatalogRule.fromAPI(ruleData, labelMap);
  }

  if (type === "order") {
    return OrderRule.fromAPI(ruleData, labelMap);
  }

  return null;
};
