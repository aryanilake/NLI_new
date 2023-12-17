import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

export default function Headers({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h5"
        color={colors.greenAccent[400]}
        
        sx={{ mb: "5px" }}>{subtitle}</Typography>
    </Box>
  );
}
