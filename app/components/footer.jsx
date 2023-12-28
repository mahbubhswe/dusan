import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  var today = new Date();
  return (
    <Box
      sx={{
        marginTop: "100px",
        height: { xs: "600px", sm: "350px", md: "350px" },
        background: "#FFFAF9",
        borderTopLeftRadius: "120px",
        borderTopRightRadius: "120px",
        padding: "50px",
        textAlign: "center",
        boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
      }}
    >
      <SocialIcon url="www.youtube.com" style={{ margin: "6px" }} />
      <SocialIcon url="www.facebook.com" style={{ margin: "6px" }} />
      <SocialIcon url="www.linkedin.com" style={{ margin: "6px" }} />
      <SocialIcon url="www.vimeo.com" style={{ margin: "6px" }} />
      <br /> <br />
      <Divider />
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        sx={{ padding: "10px" }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="abc@gmail.com" secondary="Email Address" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="+8801234567890" secondary="Phone" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BusinessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Dhaka, Bangladesh" secondary="Address" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <div>
            <h1>Our Mobile App</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              repudiandae adipisci iusto deleniti reprehenderit
            </p>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#D0392C" }}
            >
              Download Now
            </Button>
          </div>
        </Box>
      </Stack>
      <p style={{ padding: "20px", background: "#FFFAF9" }}>
        © {today.getFullYear()} Dhaka University Student All rights reserved
      </p>
    </Box>
  );
}
