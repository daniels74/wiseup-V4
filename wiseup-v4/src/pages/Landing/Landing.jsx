import { React, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box } from "@mui/material";

// components
import TopSection from "./TopSection/TopSection";
//import LowerSection from "./LowerSection/LowerSection";

const Landing = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [popularCryptoData, setPopularCryptoData] = useState();
  
  useEffect(() => {
    async function getCoinPrices(coins) {
      let data = [];
      for (const element of coins) {
        const d = await fetch(
          `https://api.coingecko.com/api/v3/coins/${element}`
        ).then((res) => res.json());
        // console.log(d);
        data.push(d);
      }
      return data;
    }

    async function getPopularCoins() {
      let trendingCoins = [];
      trendingCoins = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      ).then((res) => res.json())
      // console.log("trendingCoins: ", trendingCoins.coins);
    return trendingCoins.coins;
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
      return htmlArray;
    };

    const fetchCoins = async () => {
      const data = await getCoinPrices(coins);
      let htmlArray = createhtmlArray(data);
      setCryptoData(htmlArray);
    };

    async function getCoinUSDPrice(ids) {
      const arrayOfObjects = await getCoinPrices(ids);
      return arrayOfObjects;
    }

    const fetchPopularCoins = async () => {
      const popularCoins = await getPopularCoins();
      // console.log("popularCoins: ", popularCoins);
      let ids = popularCoins.map((coin) => {
        return (
          coin.item.id
        );
      })
      // console.log("ids: ", ids);
      const prices = await getCoinUSDPrice(ids);
      // console.log("Prices: ", prices);
      setPopularCryptoData(prices);
    }

    fetchCoins();
    fetchPopularCoins();
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
            mostPopularCryptoBar={popularCryptoData}
          />
        </Box>
        {/* <Box sx={{ position: "relative", height: "50%", width: "100%" }}>
          <LowerSection />
        </Box> */}
    </Box>
  );
};

export default Landing;
