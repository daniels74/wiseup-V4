import { React, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box } from "@mui/material";

// components
import TopSection from "./TopSection/TopSection";
//import LowerSection from "./LowerSection/LowerSection";

const Landing = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function getCoinPrices(coins) {
      let data = [];
      for (const element of coins) {
        const d = await fetch(
          `https://api.coingecko.com/api/v3/coins/${element}`
        ).then((res) => res.json());
        console.log(d);
        data.push(d);
      }
      return data;
    }
    const coins = ["bitcoin", "ethereum", "tether", "dogecoin", "matic-network"];

    const createhtmlArray = (arr) => {
      let htmlArray = arr.map(function (element, i) {
        return (
          <div key={i}>
            {element.name} : {element.market_data.current_price.usd}
          </div>
        );
      });
      setCryptoData(htmlArray);
    };

    const fetchCoins = async () => {
      const data = await getCoinPrices(coins);
      console.log("Coin Data: ", data);
      createhtmlArray(data);
    };
    fetchCoins();
  },[]);


  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        width: "100%",
        height: "95%", // 5vh for navbar so 95 for this
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-around",
        // text-shadow: 0.1em 0.1em 0.15em rgb(185, 242, 255)
        backgroundColor: "rgba(0, 0, 0, .4)"
      }}
    > 
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <TopSection
            data={cryptoData}
          />
        </Box>
        {/* <Box sx={{ position: "relative", height: "50%", width: "100%" }}>
          <LowerSection />
        </Box> */}
    </Box>
  );
};

export default Landing;
