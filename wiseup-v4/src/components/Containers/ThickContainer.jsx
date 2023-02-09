import React from 'react'
import { Box } from '@mui/material'
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
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        backgroundColor: "rgb(10, 26, 52)",
        transform: "scale(1.05)",
        boxShadow: "0 2px 20px grey",
        // boxShadow: "0 2px 20px black",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: blue[500]
    }}>
      <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        gridTemplateRows: "repeat(auto, 35%)",
        backgroundColor: "darkblue",
        gridRowGap: "5rem"

      }}>
        <Box>
          Picure
        </Box>
        <Box
        sx={{
          gridColumnStart: "2",
          gridColumnEnd: "5",
          gridRowStart: "auto",
          gridRowEnd: "auto",
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et laboriosam animi debitis nobis, eos aliquam facilis blanditiis sequi, est iure tempore recusandae eveniet consequatur necessitatibus atque dolorem quo adipisci!
        </Box>
        <Box>
          Picure
        </Box>
        <Box
        sx={{
          gridColumnStart: "2",
          gridColumnEnd: "5",
          gridRowStart: "auto",
          gridRowEnd: "auto",
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et laboriosam animi debitis nobis, eos aliquam facilis blanditiis sequi, est iure tempore recusandae eveniet consequatur necessitatibus atque dolorem quo adipisci!
        </Box>
      </Box>

        
       
    </Box>
  )
}

export default ThickContainer