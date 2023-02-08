import React from "react";
import { Box } from "@mui/material";
import { blue, green } from "@mui/material/colors";

const Card = ({ key, price, name, i }) => {
  {
    if (i === 0) {
      return (
        <Box
          key={key}
          color={blue[500]}
          sx={{
            gridRowStart: "1",
            gridRowEnd: "3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "60%",
            width: "80%",
            top: "4rem",
            left: "2.5rem",
            borderRadius: "1rem",
            backgroundColor: green[700],
            color: "black",
            fontSize: "1.2rem",
          }}
        >
          <Box>{name}</Box>
          <Box>{price}</Box>
        </Box>
      );
    } else {
      return (
        <Box
          key={key}
          sx={{
            backgroundColor: green[700],
            color: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60%",
            width: "80%",
            position: "relative",
            top: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Box>{name}</Box>
          <Box>{price}</Box>
        </Box>
      );
    }
  }
};

export default Card;
