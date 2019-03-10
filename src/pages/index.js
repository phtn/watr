import React, { useState, useRef } from "react";
import Layout from "../components/layout";
// import ClearWater from "../assets/clear-water.mp4";
import Helmet from "react-helmet";
import Newsletter from "../components/newsletter";

import Fade from "react-reveal/Fade";
// import Slide from "react-reveal/Slide";
import NatEnv from "../assets/natenv.jpg";

// import { FixedSizeList as List } from "react-window";
// import FunnelImage from "../assets/filter-sword.svg";
// import DropImage from "../assets/drop.svg";
import Drop from "../components/drop";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { useInterval } from "../hooks/useInterval";
import "../animate.css";

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
  },

  slideContainer: {
    border: "1px solid tomato",
    backgroundColor: "teal"
  }
};

const Hero = props => {
  const { count } = props;
  const imgRef = useRef();
  // console.log(imgRef.current)
  return (
    <StaticQuery
      query={graphql`
        query {
          emptyBottle: file(relativePath: { eq: "empty-bottle.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          lake: file(relativePath: { eq: "lake.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        const images = [
          data.emptyBottle.childImageSharp.fluid,
          data.lake.childImageSharp.fluid
        ];
        return (
          <div width={400} height={300} style={{ overflow: "hidden" }}>
            <Img ref={imgRef} fluid={images[count]} />
          </div>
        );
      }}
    />
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
          Clean Water is Essential to our Health.
        </h1>
        <p style={{ fontFamily: "Open Sans, sans-serif", color: "#444" }}>
          <i>{`Read these qoutes and guess who's it from`}</i>
        </p>
      </Fade>
    </div>
  );
};

const Reclaim = () => {
  const slogans = ["bottle", "lake"];

  let [count, setCount] = useState(0);

  function runSlogans(items) {
    count < items.length - 1 ? setCount(count + 1) : setCount(0);
  }

  function HeroLabel() {
    return <span className="animated fadeInUp">{`${slogans[count]}`}</span>;
  }

  useInterval(() => {
    // Your custom logic here
    runSlogans(slogans);
  }, 8000);

  return (
    <div
      style={{ border: "0px solid #red", width: "100%", textAlign: "center" }}
    >
      <Hero count={count} />
      {/* <Slide up cascade> */}
      <div
        style={{
          border: "0px solid tomato",
          color: "#eee",
          fontSize: "35px",
          position: "absolute",
          top: 125,
          zIndex: 1,
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <h3 style={{ fontFamily: "Quicksand, sans-serif" }}>
          <HeroLabel />
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1
          style={{
            fontSize: 24,
            color: "dark #003366",
            padding: "10px 20px",
            backgroundColor: "#fff",
            borderRadius: 5,
            boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)"
          }}
        >
          #ReclaimYourFreedomToday
        </h1>
      </div>
      {/* </Slide> */}

      {/* <Slide left>
        <p
          style={{
            padding: "10px 20px",
            backgroundColor: "tomato",
            borderRadius: "0px 20px 20px 0px",
            width: "200px",
            fontFamily: "Open Sans, sans-serif",
            color: "#fff"
          }}
        >
          code:{" "}
          <span
            style={{
              letterSpacing: 1,
              fontWeight: "bolder",
              color: "#003366",
              marginLeft: 15
            }}
          >
            RYFT10
          </span>{" "}
        </p>
      </Slide> */}
    </div>
  );
};

const Bridge = props => {
  // const { width } = props
  // console.log(width)
  return <div style={styles.bridge}>{props.component}</div>;
};

const Slider = props => {
  const items = [1, 2, 3, 4];

  return (
    <div style={{ border: "0px solid blue", overflow: "auto", height: 340 }}>
      {/* <Reasons width={width} /> */}

      <div // SLIDER CONTAINER 1 👽
        style={{
          // border: "2px solid tomato",
          width: 1600,
          float: "left",
          display: "flex",
          height: 300,
          padding: 20
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: 280,
                border: "0px solid tomato",
                borderRadius: 5,
                boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
                backgroundColor: "#fff",
                padding: 10,
                marginRight: 20
              }}
            >
              <div
                style={{
                  border: "0px solid tomato",
                  height: "200px",
                  borderRadius: "2px",
                  backgroundColor: "#ccc",
                  backgroundImage: `url(${NatEnv})`,
                  backgroundPosition: "center"
                }}
              >
                {/*  */}
              </div>

              <div
                style={{
                  // border: "1px solid tomato",
                  height: 90,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <button
                  style={{
                    backgroundColor: "gray",
                    padding: "10px 50px",
                    border: "0px solid tomato",
                    borderRadius: 5,
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: 2
                  }}
                >
                  reveal
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 🏆 🏆 🏆
export default function Index() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>

      <Layout title={`William Wallace Water`}>
        <div style={{ height: 50 }} />
        {/* <Landing /> */}
        <Bridge component={<Reclaim />} />
        <Bridge component={<Essential />} />

        <Slider />
        <Bridge component={<Drop />} />
        <Bridge component={<Newsletter />} />
      </Layout>
    </>
  );
}
