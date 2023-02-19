import React from "react";

//-------------Styless--------------------
import "./TopSection.css";
import { Box } from "@mui/material";

//------------Components------------------
import DiamondsMarquee from "../../../components/Marquee/Diamonds/DiamondsMarquee";
import FloatingInfoBar from "../../../components/AliceCarousels/FloatingInfoBar";
import TopCryptoStats from "../../../components/Containers/ThinContainer";
import CryptoNews from "../../../components/Containers/ThickContainer";
import TopeTrending_Container from "../../../components/Containers/TitleContainers/TopeTrending_Container";
// import UsersCarousel from "../../../components/AliceCarousels/Carousel";

const TopSection = ({ data, mostPopularCryptoBar }) => {
  const MarqueeImages_LargeScreen = [
    { id: 1, img: "./logo192.png" },
    { id: 2, img: "./logo192.png" },
    { id: 3, img: "./logo192.png" },
    { id: 4, img: "./logo192.png" },
    { id: 5, img: "./logo192.png" },
    { id: 6, img: "./logo192.png" },
    { id: 7, img: "./logo192.png" },
    { id: 8, img: "./logo192.png" },
    { id: 9, img: "./logo192.png" },
    { id: 10, img: "./logo192.png" },
    { id: 11, img: "./logo192.png" },
    { id: 12, img: "./logo192.png" },
  ];

  const MarqueeImages_SmallScreen = [
    { id: 1, img: "./logo192.png" },
    { id: 2, img: "./logo192.png" },
    { id: 3, img: "./logo192.png" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${require("../../../images/space7.jpg")})`,
        backgroundSize: "cover",
        zIndex: "0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* DiamondsMarquee */}
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "0",
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DiamondsMarquee array={MarqueeImages_LargeScreen} />
      </Box>

      {/* DiamondsMarquee */}
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "0",
          display: { xs: "flex", md: "none" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DiamondsMarquee array={MarqueeImages_SmallScreen} />
      </Box>

      {/* FloatitingInfoBar */}
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          height: "1.5%",
        }}
      >
        <FloatingInfoBar data={data} />
      </Box>

        <Box
         sx={{
          position: "relative",
          height: "100%",
          width: "100",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}>

        
      <Box
        sx={{
          zIndex: "1",
          position: "relative",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: "2",
            height: "15%",
            width: "25%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "left",
            left: "2.5rem",
          }}
        >
          <TopeTrending_Container />
        </Box>

        {mostPopularCryptoBar && (
          <Box
            sx={{
              position: "relative",
              zIndex: "1",
              height: "75%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TopCryptoStats mostPopularCryptoBar={mostPopularCryptoBar} />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          height: "60%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "blue",
        }}
      >
        <CryptoNews />
      </Box>
      </Box>

    </Box>
  );
};

export default TopSection;
