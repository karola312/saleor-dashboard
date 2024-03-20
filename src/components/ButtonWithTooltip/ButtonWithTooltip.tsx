import { Button, ButtonProps, Tooltip } from "@saleor/macaw-ui-next";
import React from "react";

interface ButtonWithTooltipProps extends ButtonProps {
  tooltip?: string;
  children: React.ReactNode;
}

export const ButtonWithTooltip = ({
  tooltip,
  children,
  ...props
}: ButtonWithTooltipProps) => {
  if (!tooltip) {
    return <Button {...props}>{children}</Button>;
  }

  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Button {...props}>{children}</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>{tooltip}</Tooltip.Content>
    </Tooltip>
  );
};
