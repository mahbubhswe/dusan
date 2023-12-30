import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Box
      sx={{
        height: { xs: "1000px", sm: "500px", md: "500px" },
        padding: "10px",
        display: "grid",
        placeContent: "center",
      }}
    >
      <h1
        style={{
          color: "#CC2D3C",
          textAlign: "center",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        About Us
      </h1>

      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        justifyContent={"space-between"}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Image
            src={"/aboutus.png"}
            height={300}
            width={300}
            quality={100}
            alt="About us image"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Typography p={5}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. In publishing
            and graphic design, Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available. In publishing and
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available. In publishing and
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
