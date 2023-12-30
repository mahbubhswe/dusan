import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function TopHero() {
  return (
    <Stack direction={"row"} sx={{ height: "130px", background: "white" }}>
      <Image src={"/logo.jpg"} height={120} width={120} quality={100} />
      <Box sx={{ display: "grid", placeContent: "center" }}>
        <h1 className="titleFont">
          ঢাকা ইউনিভার্সিটি স্টুডেন্টস এসোসিয়েশন আব নান্দাইল
        </h1>
        <Typography sx={{ color: "grey" }}>
          সু-শিক্ষায় শিক্ষিত হবো, আলোকিত নান্দাইল গড়বো
        </Typography>
      </Box>
    </Stack>
  );
}
