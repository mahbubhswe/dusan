"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CountUp from "react-countup";
import { Zoom, Slide } from "react-awesome-reveal";

export default function OurCommunity() {
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
        Our Community
      </h1>
      <Zoom>
        <Typography style={{ width: "50%", margin: "auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          veniam, autem blanditiis iure eius nihil numquam possimus a provident
          omnis vitae mollitia, nisi explicabo asperiores aliquam?
        </Typography>
      </Zoom>

      <br />
      <br />

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
          <Slide>
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={"/group.png"}
                height={100}
                width={100}
                quality={100}
                style={{
                  padding: "25px",
                  borderRadius: "50%",
                  border: "3px solid #009CFF",
                }}
              />
              <h2>Join Today</h2>
              <h2
                style={{
                  color: "#009CFF",
                  textAlign: "center",
                  textShadow: "5px 5px 25px #009CFF",
                }}
              >
                <CountUp end={1000000} />
              </h2>
            </Stack>{" "}
          </Slide>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Slide direction="right">
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={"/user.png"}
                height={100}
                width={100}
                quality={100}
                style={{
                  padding: "25px",
                  borderRadius: "50%",
                  border: "3px solid #009CFF",
                }}
              />
              <h2>Total Member</h2>
              <h2
                style={{
                  color: "#009CFF",
                  textAlign: "center",
                  textShadow: "5px 5px 25px #009CFF",
                }}
              >
                <CountUp end={1000000} />
              </h2>
            </Stack>
          </Slide>
        </Box>
      </Stack>
    </Box>
  );
}
