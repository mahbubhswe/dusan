import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function TopHero() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      sx={{
        background: "#FFFAF9",
        p: "3px",
      }}
    >
      <Typography align="center">
        <Image src={"/logo.png"} height={120} width={120} quality={100} />
      </Typography>
      <Box sx={{ display: "grid", placeContent: "center" }}>
        <h2
          className="titleFont"
          style={{
            color: "#009CFF",
            textAlign: "center",
            textShadow: "5px 5px 25px #009CFF",
          }}
        >
          ঢাকা ইউনিভার্সিটি স্টুডেন্ট এসোসিয়েশন আব নান্দাইল(নরসুন্দা)
        </h2>
        <Typography align="center">
          <span style={{ color: "grey" }}>
            সু-শিক্ষায় শিক্ষিত হবো, আলোকিত নান্দাইল গড়বো
          </span>
          <br />
          <span style={{ color: "grey" }}>
            স্থাপিত - ২০১৫, কার্যালয় - ঢাকা বিশ্ববিদ্যালয়
          </span>{" "}
          <br />
          <span style={{ color: "grey" }}>dusan.narosunda@gmail.com</span>
        </Typography>
      </Box>
    </Stack>
  );
}
