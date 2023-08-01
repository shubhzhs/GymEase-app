import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/GymEase/GymEase-logos_black.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "60px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "14px", xs: "12px" } }}
      mt="2px"
      textAlign="center"
      pb="40px"
    >
      Empower Your Workout Journey with GymEase
    </Typography>
    <Typography
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Developed with ❤️ by Shubham
    </Typography>
  </Box>
);

export default Footer;
