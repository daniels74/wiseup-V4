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

    </Box>
  )
}

export default ThickContainer