"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import navItems from "../utils/navItems";
import { useRouter, usePathname } from "next/navigation";
import TopHero from "./topHero";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ bgcolor: "#FF534F" }} elevation={2}>
        <TopHero />
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ p: "5px" }}>
            <IconButton
              size="large"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            <Stack
              direction={"row"}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((page) => (
                <Button
                  key={page.title}
                  className="navFont"
                  sx={{
                    color: pathname == page.pathname ? "black" : "white",
                  }}
                  onClick={() => router.push(page.pathname)}
                >
                  {page.title}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={open}
        elevation={1}
        sx={{ width: "500px" }}
        onClose={() => setOpen(false)}
      >
        <Stack
          sx={{ height: "100vh", p: "30px" }}
          direction="column"
          justifyContent={"space-between"}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h1>মেনু</h1>
            {navItems.map((page) => (
              <Button
                key={page.title}
                className="navFont"
                sx={{
                  color: pathname == page.pathname ? "black" : "black",
                }}
                onClick={() => {
                  setOpen(false), router.push(page.pathname);
                }}
              >
                {page.title}
              </Button>
            ))}
          </Stack>
          <Button variant="outlined">Login</Button>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}
export default Navbar;
