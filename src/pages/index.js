import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import ClearWater from "../assets/clear-water.mp4";
import Helmet from "react-helmet";
import Newsletter from "../components/newsletter";
import Fade from "react-reveal";
import { FixedSizeList as List } from "react-window";
import FunnelImage from '../assets/filter-sword.svg'
import DropImage from '../assets/drop.svg'





const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  landingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },

  bridge: {
    minHeight: 100,
    backgroundColor: "#fff",
    // border: '1px solid red',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
const Landing = props => {
  return (
    <div style={styles.landingContainer}>
      <video id="landingVideo" muted autoPlay loop width="100%">
        <source src={ClearWater} />
      </video>
    </div>
  );
};

const reasonItems = [
  "It improves the Immune System",
  "Prevents Gastrointestinal diseases",
  "Improved Hydration Levels",
  "Slows down the aging process"
]

const FlexCenterAll = ({ child, height }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: height}}>
      {child}
    </div>
  )
}

const Drop = () => {
  return (
    <Fade top>
      <FlexCenterAll child={<img src={DropImage} alt='' height={50}/>} height={150}/>
    </Fade>
  )
}
const Funnel = () => {
  return (
    <FlexCenterAll child={<img src={FunnelImage} alt='' height={150}/>} height={200 }/>
  )
}

const Column = ({ index, style }) => (
  <div style={style}>
    
    <div
      style={{
        height: 100,
        padding: 10,
        fontSize: 8,
        fontFamily: 'Roboto, sans-serif',
        color: '#ccc'
        // backgroundColor: "rgba(52,205,250, 0.3)",
        // textAlign: "center"
      }}
    >
    {index + 1}
      <div
        style={{
          // border: "1px solid #ccc",
          borderRadius: 5,
          boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
          // backgroundColor: "#eee",
          backgroundColor: "rgba(52,205,250, 0.3)",
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >

        <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: 16, color: '#333'}}>{reasonItems[index]}</p>

      </div>
    </div>
  </div>
);

const Reasons = props => {
  const { reasons, width } = props
  console.log(reasons, width)
  return (
    <List
      direction="horizontal"
      height={120}
      itemCount={reasons.length}
      itemSize={width * 0.8}
      width={width}
    >
      {Column}
    </List>
  );
};

const Essential = props => {
  return (
    <div style={{ textAlign: "center", padding: 15 }}>
      <Fade top>
        <h1
          style={{
            fontSize: 24,
            fontFamily: "Quicksand",
            fontWeight: "bolder"
          }}
        >
          Clean Drinking Water is essential to your Health.
        </h1>
        <p style={{ fontFamily: "Open Sans, sans-serif", color: "#444" }}>
          <i>and here are the reasons why:</i>
        </p>
      </Fade>
    </div>
  );
};

const Bridge = props => {
  // const { width } = props
  // console.log(width)
  return <div style={styles.bridge}>{props.component}</div>;
};

const Slider = props => {
  const { width } = props
  // console.log(width)
  return <div style={styles.bridge}>
    <Reasons width={width} reasons={reasonItems} />
  </div>;
};

// 🏆 🏆 🏆
export default function Index() {
  const [width, setWidth] = useState(
    typeof global !== "undefined" && global.innerWidth
  );

  useEffect(() => {
    const handleWidthResize = () => setWidth(typeof global !== "undefined" && global.innerWidth);

    return () =>
      typeof global !== "undefined" &&
      global.removeEventListener("resize", handleWidthResize);
  }, [width]);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>

      <Layout title={`William Wallace Water`}>
        <Landing />
        <Bridge component={<Essential />} />
        <Slider />
        {/* <Bridge component={<Funnel width={width} />} /> */}
        <Bridge component={<Drop width={width} />} />
        <Bridge component={<Newsletter />} />
      </Layout>
    </>
  );
}
