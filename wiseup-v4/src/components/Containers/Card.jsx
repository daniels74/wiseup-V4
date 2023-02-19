import React from "react";
import { Box } from "@mui/material";
import { blue, green, yellow } from "@mui/material/colors";

const Card = ({ key, price, name, i, thepic }) => {
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
            top: { xs: "2rem", md: "4rem", lg: "4rem" },
            left: "2.5rem",
            borderRadius: "1rem",
            backgroundColor: "#266639",
            color: "lightblue",
            fontSize: { xs: ".8rem", lg: "1.2rem" },
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: blue[500],
            boxShadow: "0 2px 20px white",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "1rem",
              background: "rgb(9,42,12)",
              background:
                "radial-gradient(circle, rgba(9,42,12,1) 0%, rgba(7,22,34,1) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem"
            }}
          >
            <Box component="img" height="40%" src={thepic}></Box>
            <Box>{name}</Box>
            <Box>${price}</Box>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          key={key}
          sx={{
            backgroundColor: "#266639",
            color: "lightblue",
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: "#40965a",
            boxShadow: "0 2px 20px green",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "60%",
            maxWidth: "95%",
            minHeight: "60%",
            position: "relative",
            top: { xs: "1rem", md: "2rem", lg: "2rem" },
            left: { xs: "3rem", lg: "0rem" },
            borderRadius: "1rem",
            fontSize: { xs: ".8rem", lg: "1.2rem" },
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "1rem",
              background: "rgb(9,42,12)",
              background:
                "radial-gradient(circle, rgba(9,42,12,1) 0%, rgba(7,22,34,1) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={thepic}></Box>
            <Box>{name}</Box>
            <Box>${price}</Box>
          </Box>
        </Box>
      );
    }
  }
};

export default Card;
