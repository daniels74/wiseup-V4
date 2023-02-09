import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
//26324f
import Card from "./Card";

const ThinContainer = ({ mostPopularCryptoBar }) => {
 

  const CryptoBarData = mostPopularCryptoBar.map((item, i) => {
    return (
      <Card key={i} price={item.market_data.current_price.usd} name={item.name} i={i} />
    );
  });

  return (
    <Box
      sx={{
        height: "70%",
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
        backgroundColor: "rgb(10, 26, 52)",
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
          gridTemplateColumns: "repeat(4, 20%)",
          gridTemplateRows: "repeate(2, 2rem)",
          gridRowGap: {xs: ".2rem", lg:".2rem"},
          gridColumnGap: {xs: "0rem", lg: "4rem"},
        }}
      >
        {mostPopularCryptoBar && CryptoBarData}
 
      </Box>
    </Box>
  );
};

export default ThinContainer;
