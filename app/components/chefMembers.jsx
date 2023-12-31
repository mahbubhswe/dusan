"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Slide } from "react-awesome-reveal";
export default function ChefMembers() {
  return (
    <Box
      sx={{
        padding: "10px",
        display: "grid",
        placeContent: "center",
        px: { xs: "3%", sm: "5%", md: "7%" },
        mx: { xs: "3%", sm: "5%", md: "7%" },
        my: "25px",
      }}
    >
      <h1
        style={{
          color: "#009CFF",
          textAlign: "center",
          textShadow: "5px 5px 25px #009CFF",
        }}
      >
        Our President
      </h1>
      <Slide>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          justifyContent={"space-between"}
          spacing={5}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "30%" },
              display: "grid",
              placeContent: "center",
              border: "1px solid white",
              borderRadius: "25px",
              textAlign: "center",
              boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
              padding: "12px",
            }}
          >
            <Typography align="center">
              <Image
                src={"/man.jpg"}
                height={200}
                width={200}
                quality={100}
                alt="man image"
                style={{ borderRadius: "50%" }}
              />
            </Typography>

            <Typography
              style={{
                color: "#009CFF",
                fontWeight: "bold",
                textShadow: "5px 5px 25px #009CFF",
              }}
            >
              Mahbub Hasan
            </Typography>
            <p>Dhaka University Student Association of Nandail</p>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "70%" },
              display: "grid",
              placeContent: "center",
              border: "1px solid white",
              borderRadius: "25px",
              boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
            }}
          >
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    style={{
                      color: "#009CFF",
                      fontWeight: "bold",
                      textShadow: "5px 5px 25px #009CFF",
                    }}
                  >
                    Speech of President
                  </Typography>
                }
                secondary=" In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. In publishing
            and graphic design, Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on"
              />
            </ListItem>
          </Box>
        </Stack>
      </Slide>
      <br /> <br />
      <Slide direction="right">
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          justifyContent={"space-between"}
          spacing={5}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "30%" },
              display: "grid",
              placeContent: "center",
              border: "1px solid white",
              borderRadius: "25px",
              textAlign: "center",
              boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
              padding: "12px",
            }}
          >
            <Typography align="center">
              <Image
                src={"/man.jpg"}
                height={200}
                width={200}
                quality={100}
                alt="man image"
                style={{ borderRadius: "50%" }}
              />
            </Typography>

            <Typography
              style={{
                color: "#009CFF",
                fontWeight: "bold",
                textShadow: "5px 5px 25px #009CFF",
              }}
            >
              Mahbub Hasan
            </Typography>
            <p>Dhaka University Student Association of Nandail</p>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "70%" },
              display: "grid",
              placeContent: "center",
              border: "1px solid white",
              borderRadius: "25px",
              boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
            }}
          >
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    style={{
                      color: "#009CFF",
                      fontWeight: "bold",
                      textShadow: "5px 5px 25px #009CFF",
                    }}
                  >
                    Speech of General Secretary
                  </Typography>
                }
                secondary=" In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. In publishing
            and graphic design, Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on"
              />
            </ListItem>
          </Box>
        </Stack>
      </Slide>
    </Box>
  );
}
