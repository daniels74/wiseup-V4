import React from "react";
import { Box } from "@mui/material";
import { blue, green } from "@mui/material/colors";

const Card = ({ price, name, i }) => {
  {
    if (i === 0) {
      return (
        <Box 
        color={blue[500]}
        sx={{
          gridRowStart: "1",
          gridRowEnd: "3",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height:"60%",
          width: "80%",
          top: "4rem",
          left: "2rem",
          borderRadius: "2rem",
          backgroundColor: blue[500],
          color: "black",
          fontSize: "1.2rem"
        }}>
          {name} {price}
        </Box>
      );
    } else {
      return (
        <Box
        sx={{
          backgroundColor: green[500],
          color: "black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height:"60%",
          width: "80%",
          position: "relative",
          top: "2rem",
          borderRadius: "2rem"
        }}>
          {name} {price}
        </Box>
      );
    }
  }
};

export default Card;
