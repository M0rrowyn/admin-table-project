import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => (
  <Box
    className="not-found-page"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <Typography variant="h1" style={{ color: "white" }}>
      404
    </Typography>
    <Typography variant="h6" style={{ color: "white" }}>
      The page you’re looking for doesn’t exist.
    </Typography>
  </Box>
);

export default NotFound;
