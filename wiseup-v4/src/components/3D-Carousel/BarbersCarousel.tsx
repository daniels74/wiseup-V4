//import React from 'react'
import { useState } from "react";
import { cx } from "@emotion/css";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import * as Styles from "./Styles";

const getSortedSides = (direction: 1 | -1, sides: string[]): string[] => {
  let sorted: string[] = [];

  if (direction === 1) {
    const toMove = sides.pop() as string;
    sorted = [toMove, ...sides.filter((side) => side !== toMove)];
  } else if (direction === -1) {
    const toMove = sides.shift() as string;
    sorted = [...sides.filter((side) => side !== toMove), toMove];
  }

  return sorted;
};

const initialSides = ["back", "farLeft", "left", "front", "right", "farRight"];
const BarbersCarousel = () => {
  const [sides, setSides] = useState(initialSides);

  const updateCurrent = (direction: 1 | -1) => {
    let sortedSides = getSortedSides(direction, sides);
    setSides(sortedSides);
  };

  // const [pic, setPic] = useState();
  // create map for index value to picture name
  let pictureMapping = new Map<number, string>();

  //add pictures to map
  pictureMapping.set(0, "space");
  pictureMapping.set(1, "landscaping");
  pictureMapping.set(2, "clocks");
  pictureMapping.set(3, "body");
  pictureMapping.set(4, "space");
  pictureMapping.set(5, "clocks");

  const renderSides = () => {
    const getPic = ({ index }) => {
      let pic = pictureMapping.get(index);
      return pic;
    };
    return sides.map((className: string, index) => (
      <div key={index} className={cx(Styles.side, Styles[className])}>
        <Box
          component="img"
          src={`../../images/${getPic({ index })}.jpg`}
          alt=""
          sx={{
            width: {
              xs: "100px",
              sm: "200px",
              md: "300px",
              lg: "400px",
              xl: "400px",
            },
            height: {
              sx: "50px",
              sm: "100px",
              md: "150px",
              lg: "200px",
              xl: "200px",
            },
          }}
        ></Box>
        {/* <img className={Styles.img} src={`../../images/${getPic({index})}.jpg`} alt="" /> */}
      </div>
    ));
  };

  return (
    <Container
      sx={{
        overflowY: "hidden",
        overflowX: "hidden",
        position: "absolute",
        height: "100%",
        width: "100%",
        //backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div className={Styles.container}> */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "85%",
          // backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {/* <div className={Styles.carousel}> */}
        <Box
          sx={{
            marginTop: "20%",
            marginBottom: "20%",
            // position: "relative",
            // backgroundColor: "blue",
            perspective: "800px",
            perspectiveOrigin: "center bottom",
            transformStyle: "preserve-3d",
          }}
        >
          {/* <div className={Styles.hexagon}>{renderSides()}</div> */}
          <Box
            sx={{
              position: "relative",
              width: {
                xs: "100px",
                sm: "200px",
                md: "300px",
                lg: "400px",
                xl: "400px",
              },
              height: {
                sx: "50px",
                sm: "100px",
                md: "150px",
                lg: "200px",
                xl: "200px",
              },
              transformStyle: "preserve-3d",
            }}
          >
            {renderSides()}
          </Box>
        </Box>
        {/* </div> */}
      </Box>
      {/* </div> */}
      <Box
        sx={{
          position: "relative",
          height: "15%",
          width: "100%",
          // backgroundColor: "blue",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button onClick={() => updateCurrent(1)} variant="contained">Left</Button>
        <Button onClick={() => updateCurrent(-1)} variant="contained">Right</Button>
      </Box>
    </Container>
  );
};

export default BarbersCarousel;
