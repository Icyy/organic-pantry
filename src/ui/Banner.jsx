import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import banner from "../Assets/banner.png";

const BannerContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Ensures the image stays within the banner's boundaries
  backgroundColor: "#000", // Fallback color in case the image doesn't load
});

const BannerText = styled(Typography)({
  position: "relative",
  textAlign: "center",
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "bold",
  zIndex: 1, // Ensure the text is above the image
});

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        marginTop:'50px',
        marginBottom:'50px',
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: "scale(1.1)", // Zooms the image a bit
      }}
    >
      {/* Semi-transparent overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Black overlay with 50% opacity
          zIndex: 1, // Behind the text but above the image
        }}
      />

      <Typography
        sx={{
          color: "#ffffff",
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 2, // Ensures text is above the overlay
        }}
      >
        Organic products
        <br />
        Buy Organic products online in Delhi, Gurgaon and Noida
      </Typography>
    </Box>
  );
};

export default Banner;
