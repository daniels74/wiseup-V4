import React from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
//26324f
const ThickContainer = () => {
  return (
    <Box
      sx={{
        height: "90%",
        width: "90%",
        position: "absolute",
        top: "0",
        overflow: "hidden",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        // backgroundColor: "rgb(10, 26, 52)",
        background: "rgb(8,50,91)",
        background:
          "radial-gradient(circle, rgba(8,50,91,1) 0%, rgba(7,22,34,1) 100%)",
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
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderWidth: "medium",
        height: "10rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    
      }}>
        <Box
          sx={{
            width: "90%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 25%)",
            gridTemplateRows: "repeat(auto, 35%)",
          }}
        >
          <Box>Picure</Box>
          <Box
            sx={{
              gridColumnStart: "2",
              gridColumnEnd: "5",
              gridRowStart: "auto",
              gridRowEnd: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et
            laboriosam animi debitis nobis, eos aliquam facilis blanditiis
            sequi, est iure tempore recusandae eveniet consequatur
            necessitatibus atque dolorem quo adipisci!
          </Box>
        </Box>
      </Box>

      <Box
      sx={{
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderWidth: "medium",
        height: "10rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    
      }}>
        <Box
          sx={{
            width: "90%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 25%)",
            gridTemplateRows: "repeat(auto, 35%)",
          }}
        >
          <Box>Picure</Box>
          <Box
            sx={{
              gridColumnStart: "2",
              gridColumnEnd: "5",
              gridRowStart: "auto",
              gridRowEnd: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et
            laboriosam animi debitis nobis, eos aliquam facilis blanditiis
            sequi, est iure tempore recusandae eveniet consequatur
            necessitatibus atque dolorem quo adipisci!
          </Box>
        </Box>
      </Box>

      <Box
      sx={{
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderWidth: "medium",
        height: "10rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    
      }}>
        <Box
          sx={{
            width: "90%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 25%)",
            gridTemplateRows: "repeat(auto, 35%)",
          }}
        >
          <Box>Picure</Box>
          <Box
            sx={{
              gridColumnStart: "2",
              gridColumnEnd: "5",
              gridRowStart: "auto",
              gridRowEnd: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et
            laboriosam animi debitis nobis, eos aliquam facilis blanditiis
            sequi, est iure tempore recusandae eveniet consequatur
            necessitatibus atque dolorem quo adipisci!
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default ThickContainer;
