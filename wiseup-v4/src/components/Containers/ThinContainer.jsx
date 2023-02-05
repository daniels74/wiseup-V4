import React from 'react'
import { Box } from '@mui/material'
import { blue } from "@mui/material/colors";
//26324f
import Card from "./Card"

const ThinContainer = ({mostPopularCryptoBar}) => {

  // const CryptoBarData = mostPopularCryptoBar.map((item) => {
  //   return (
  //     <Card
        
  //       price={item.market_data.current_price.usd}
  //       name={item.name}
        
  //     />
  //   )
  // })

  return (
    <Box
    sx={{
        height: "50%",
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
      {/* <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",

      }}>
        {mostPopularCryptoBar ? {CryptoBarData} : "Loading"}
      </Box> */}
    </Box>
  )
}

export default ThinContainer