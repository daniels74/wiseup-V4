import React from "react";
//import Compaines from "../../../components/Marquee/Diamonds/Companies";

//-------------Styless--------------------
import "./TopSection.css";
import { Box, Container } from "@mui/material";

//------------Components------------------
import DiamondsMarquee from "../../../components/Marquee/Diamonds/DiamondsMarquee";
import FloatingInfoBar from "../../../components/AliceCarousels/FloatingInfoBar";
import Intro from "./Intro";
import LoginRegister from "./LoginRegister";
import BarbersCarousel from "../../../components/3D-Carousel/BarbersCarousel";
import UsersCarousel from "../../../components/AliceCarousels/Carousel";

const TopSection = ({ data, usersArray }) => {
  const [t, sett] = React.useState(true);

  const toggleLoginReg = () => {
    sett(!t);
  };
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
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "0",
          display: {xs: "none", md: "flex"},
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <DiamondsMarquee array={MarqueeImages_LargeScreen}/>
      </Box>
      
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "0",
          display: {xs: "flex", md: "none"},
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <DiamondsMarquee array={MarqueeImages_SmallScreen}/>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          height: "10%",
          //backgroundColor: "green",
        }}
      >
        <FloatingInfoBar data={data} />
      </Box>

      {/* {!isAuthenticated && (
        <Container
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            zIndex: "1",
          }}
        >
          <Intro />
          <LoginRegister
            t={t}
            setAuth={setAuth}
            toggleLoginReg={toggleLoginReg}
          />
        </Container>
      )} */}

      {/* {isAuthenticated && ( */}
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
            //backgroundColor: "red",
          }}
        >
          <BarbersCarousel />
        </Box>
      {/* )} */}

      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          height: "10%",
          //backgroundColor: "green",
        }}
      >
        <UsersCarousel className="carousel" data={usersArray} />
      </Box>
    </Box>
  );
};

export default TopSection;
