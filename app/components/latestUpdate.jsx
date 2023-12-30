import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function LatestUpdate() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        border: "1px solid white",
        borderRadius: "25px",
        boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
        padding: { xs: "3%", sm: "5%", md: "7%" },
        margin: { xs: "3%", sm: "5%", md: "7%" },
      }}
    >
      <h1 style={{ color: "#14142B" }}>Latest News</h1>
      <Divider />
      <Typography>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available. In publishing InIn
        publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
      </Typography>
    </Box>
  );
}
