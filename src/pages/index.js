import React, { useState } from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import Newsletter from "../components/newsletter";

import Fade from "react-reveal/Fade";
import QuotesMachine from "../components/quotes";

import AnimatedHero from "../components/animated-hero";
import Drop from "../components/drop";

import { StaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";

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
  const { width } = props;
  
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
        // const images = [
        //   data.emptyBottle.childImageSharp.fluid,
        //   data.lake.childImageSharp.fluid
        // ];
        return (
          <div style={{ overflow: "hidden", height: 500 }}>
            {/* <Img ref={imgRef} fluid={images[count]} /> */}

            {/* 🚥🚥🚥🚥🚥 */}

            <AnimatedHero width={width} />

            {/* 🚥🚥🚥🚥🚥 */}
          </div>
        );
      }}
    />
  );
};

const Essential = () => {
  return (
    <div style={{ textAlign: "center", padding: 15 }}>
      <Fade bottom>
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
          <i>{`Read qoutes below and guess who wrote them.`}</i>
        </p>
      </Fade>
    </div>
  );
};

const Reclaim = props => {
  const { width } = props;
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
      <Hero count={count} width={width} />
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
      
    </div>
  );
};

const Bridge = props => {
  // const { width } = props
  // console.log(width)
  return <div style={styles.bridge}>{props.component}</div>;
};



// 🏆 🏆 🏆
const Index = props => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100|Abril+Fatface|Cinzel"
          rel="stylesheet"
        />
      </Helmet>

      <Layout title={`William Wallace Water`}>
        <div style={{ height: 50 }} />
        {/* <Landing /> */}
        <Bridge component={<Reclaim />} />
        <Bridge component={<Essential />} />

        <QuotesMachine />
        <Bridge component={<Drop />} />
        <Bridge component={<Newsletter />} />
      </Layout>
    </>
  );
};
export default Index;
