import React from "react";
import { Box } from "@mui/material";
import { blue, green, yellow } from "@mui/material/colors";

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
            top: {xs: "2rem", lg: "4rem"},
            left: "2.5rem",
            borderRadius: "1rem",
            backgroundColor: green[800],
            color: "black",
            fontSize: {xs: ".8rem", lg: "1.2rem"},
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: blue[500],
            boxShadow: "0 2px 20px white",
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
            backgroundColor: green[800],
            color: "black",
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: green[500],
            boxShadow: "0 2px 20px green",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "60%",
            maxWidth: "95%",
            minHeight: "60%",
            position: "relative",
            top: {xs: "1rem", lg: "2rem"},
            left: {xs: "3rem", lg: "0rem"},
            borderRadius: "1rem",
            fontSize: {xs: ".8rem", lg: "1.2rem"},
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
