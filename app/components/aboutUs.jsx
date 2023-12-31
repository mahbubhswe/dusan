"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Zoom, Slide } from "react-awesome-reveal";

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
          color: "#009CFF",
          textAlign: "center",
          textShadow: "5px 5px 25px #009CFF",
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
          <Zoom>
            <Image
              src={"/aboutus.png"}
              height={300}
              width={300}
              quality={100}
              alt="About us image"
            />
          </Zoom>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Slide direction="right">
            <Typography p={5}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available. In
              publishing and relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available. In
              publishing and
            </Typography>
          </Slide>
        </Box>
      </Stack>
    </Box>
  );
}
