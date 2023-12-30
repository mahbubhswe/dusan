"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CountUp from "react-countup";

export default function OurCommunity() {
  return (
    <Box
      sx={{
        height: { xs: "1000px", sm: "500px", md: "500px" },
        marginTop: "50px",
        padding: "10px",
        display: "grid",
        placeContent: "center",
      }}
    >
      <h1
        style={{
          color: "#ED692C",
          textAlign: "center",
          textShadow: "5px 5px 25px #FF534F",
        }}
      >
        Our Community
      </h1>
      <Typography style={{ width: "50%", margin: "auto" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        veniam, autem blanditiis iure eius nihil numquam possimus a provident
        omnis vitae mollitia, nisi explicabo asperiores aliquam?
      </Typography>
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
                border: "3px solid #ED692C",
              }}
            />
            <h2>Join Today</h2>
            <h2
              style={{
                color: "#ED692C",
                textAlign: "center",
                textShadow: "5px 5px 25px #FF534F",
              }}
            >
              <CountUp end={100} />
            </h2>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
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
                border: "3px solid #ED692C",
              }}
            />
            <h2>Total Member</h2>
            <h2
              style={{
                color: "#ED692C",
                textAlign: "center",
                textShadow: "5px 5px 25px #FF534F",
              }}
            >
              <CountUp end={100} />
            </h2>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
