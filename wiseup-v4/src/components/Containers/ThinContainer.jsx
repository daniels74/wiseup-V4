import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
//26324f
import Card from "./Card";

const ThinContainer = ({ mostPopularCryptoBar }) => {
 

  const CryptoBarData = mostPopularCryptoBar.map((item, i) => {
    console.log("item: ", item);
    return (
      <Card key={i} price={item.market_data.current_price.usd} name={item.name} thepic={item.image.small} i={i} />
    );
  });

  return (
    <Box
      sx={{
        height: "100%",
        width: "90%",
        position: "absolute",
        top: "0",
        overflow: "hidden",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        // backgroundColor: "rgb(10, 26, 52)",
        background: "rgb(8,50,91)",
        background: "radial-gradient(circle, rgba(8,50,91,1) 0%, rgba(7,22,34,1) 100%)",
        transform: "scale(1.05)",
        boxShadow: "0 2px 20px grey",
        // boxShadow: "0 2px 20px black",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: blue[500],
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: {xs: "repeat(4, 23%)", md: "repeat(4, 22%)"},
          gridTemplateRows: "repeat(2, 45%)",
          gridRowGap: {xs: ".2rem", md: ".5rem"},
          gridColumnGap: {xs: ".3rem",md: "2rem", lg: "4rem"},
        }}
      >
        {mostPopularCryptoBar && CryptoBarData}
 
      </Box>
    </Box>
  );
};

export default ThinContainer;
