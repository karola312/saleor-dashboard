import {
  hueToPillColorDark,
  hueToPillColorLight,
  stringToHue,
} from "@dashboard/components/Datagrid/customCells/PillCell";
import { Rule } from "@dashboard/discounts/models";
import { DefaultTheme, Option } from "@saleor/macaw-ui-next";

import { EnrichCondition } from "./components/RuleConditionsChips/useEnrichConditions";

const MAX_ITEMS_TO_SHOW = 3;

export const splitConditions = (
  conditions: Option[],
): {
  conditionsInSummary: Option[];
  conditionsInTooltip: Option[];
} => {
  const conditionsInSummary = conditions.slice(0, MAX_ITEMS_TO_SHOW);
  const conditionsInTooltip = conditions.slice(MAX_ITEMS_TO_SHOW);

  return {
    conditionsInSummary,
    conditionsInTooltip,
  };
};

export const mapConditionToOption = (
  conditions: EnrichCondition[],
): Option[] => {
  return conditions.reduce<Option[]>((acc, condition) => {
    if (
      Array.isArray(condition.values) &&
      condition.inputType === "multiselect"
    ) {
      acc.push(
        ...(condition.values as Option[]).map<Option>(conditionValue => ({
          value: conditionValue.label,
          label: condition.label ?? condition.id,
        })),
      );
    } else {
      acc.push({
        label: condition.label,
        value: condition.values.toString(),
      });
    }

    return acc;
  }, []);
};

export const conditionTypeToHue = (type: string, theme: DefaultTheme) => {
  const hue = stringToHue(type);
  return theme === "defaultDark"
    ? hueToPillColorDark(hue)
    : hueToPillColorLight(hue);
};

export const hasNoRuleConditions = (rule: Rule) => {
  return (
    !rule.conditions.length ||
    rule.conditions.every(condition => !condition.values.length)
  );
};
