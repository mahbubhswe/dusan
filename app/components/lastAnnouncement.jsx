"use client";
import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function LastAnnouncement() {
  return (
    <Zoom>
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
        <h1
          style={{
            color: "#009CFF",
            textShadow: "5px 5px 25px #009CFF",
          }}
        >
          <Typewriter
            options={{
              strings: "Last Announcement",
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image
                src={"/announcement.png"}
                height={30}
                width={30}
                quality={100}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Tour Plan 2 Days • Posted on: 23 jan, 2023"
            secondary="In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available. In publishing InIn
        publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a"
          />
        </ListItem>
      </Box>
    </Zoom>
  );
}
