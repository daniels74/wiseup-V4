import { React, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Container } from "@mui/material";

// components
import TopSection from "./TopSection/TopSection";
import LowerSection from "./LowerSection/LowerSection";

const Landing = () => {
  const [usersChange, setUsersChange] = useState(true);
  const [allUserObjects, setAllUserObjects] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    setUsersChange(false);

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
      console.log("CryptoData: ", cryptoData);
    };

    const fetchCoins = async () => {
      const data = await getCoinPrices(coins);
      console.log("Coin Data: ", data);
      createhtmlArray(data);
    };
    fetchCoins();
  }, [usersChange]);

  // must be an array of divs for Carousel compatiblity
  const users = allUserObjects.map((objects) => {
    return <div>{objects}</div>;
  });

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
            height: "50%",
            width: "100%",
          }}
        >
          <TopSection
            data={cryptoData}
            usersArray={users}
          />
        </Box>

        <Box sx={{ position: "relative", height: "50%", width: "100%" }}>
          <LowerSection />
        </Box>
     
    </Box>
  );
};

export default Landing;
