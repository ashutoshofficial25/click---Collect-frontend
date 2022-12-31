import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({
  size = "small",
  title,
  color = "success",
  variant = "contained",
}) => {
  return (
    <Button color={color} size={size} variant={variant} fullWidth>
      {title}
    </Button>
  );
};

export default PrimaryButton;
