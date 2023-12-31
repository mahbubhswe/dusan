"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typewriter from "typewriter-effect";

export default function Ads() {
  return (
    <Box
      sx={{
        marginTop: "50px",
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
        <Typewriter
          options={{
            strings: "Advertisement",
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <Stack direction={"row"} spacing={5}>
        {[1, 2, 3].map((index) => (
          <Box
            key={index}
            sx={{
              border: "2px dashed #009CFF",
              borderRadius: "25px",
              boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
              height: "300px",
              width: "300px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <h1>300x300</h1>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
