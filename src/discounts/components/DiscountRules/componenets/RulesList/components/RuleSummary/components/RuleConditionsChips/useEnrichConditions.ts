import { Locale } from "@dashboard/components/Locale";
import { useDiscountRulesContext } from "@dashboard/discounts/components/DiscountRules/context";
import { Condition } from "@dashboard/discounts/models";
import useLocale from "@dashboard/hooks/useLocale";
import { IntlShape, useIntl } from "react-intl";

import { messages } from "../../messages";
import { formatMoney, formatMoneyRange } from "./formatLable";

export type EnrichCondition = Condition & {
  inputType: string | null;
  label?: string;
};

export const useEnrichConditions = (
  conditions: Condition[],
  currencySymbol: string,
): EnrichCondition[] => {
  const { locale } = useLocale();
  const intl = useIntl();

  const { getConditionInputTypeByLabel, getConditionByValue } =
    useDiscountRulesContext();

  return conditions.map(condition => {
    const conditionInputType = getConditionInputTypeByLabel(
      condition.id,
      condition.type,
    );
    const conditionLabel = getConditionByValue(condition.id);

    const enrichedCondition = {
      ...condition,
      inputType: conditionInputType,
      label: conditionLabel?.label,
    };

    if (["price", "price.range"].includes(conditionInputType)) {
      return {
        ...enrichedCondition,
        values: formatPrice(enrichedCondition, currencySymbol, locale, intl),
      };
    }

    return enrichedCondition;
  });
};

function formatPrice(
  condition: EnrichCondition,
  currencySymbol: string,
  locale: Locale,
  intl: IntlShape,
): string {
  if (condition.type === "between") {
    return formatMoneyRange(condition, currencySymbol, locale);
  }

  if (condition.type === "greater") {
    return intl.formatMessage(messages.greaterThan, {
      value: formatMoney(condition, currencySymbol, locale),
    });
  }

  if (condition.type === "lower") {
    return intl.formatMessage(messages.lowerThan, {
      value: formatMoney(condition, currencySymbol, locale),
    });
  }

  return formatMoney(condition, currencySymbol, locale);
}
