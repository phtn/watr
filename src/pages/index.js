import React from "react";
import Layout from "../components/layout";
// import ClearWater from "../assets/clear-water.mp4";
import Helmet from "react-helmet";
import Newsletter from "../components/newsletter";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import NatEnv from "../assets/natenv.jpg";

// import { FixedSizeList as List } from "react-window";
// import FunnelImage from "../assets/filter-sword.svg";
// import DropImage from "../assets/drop.svg";
import Drop from "../components/drop";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
// const Landing = props => {
//   return (
//     <div style={styles.landingContainer}>
//       <video id="landingVideo" muted autoPlay loop width="100%">
//         {/* <source src={ClearWater} /> */}
//       </video>
//     </div>
//   );
// };

// const FlexCenterAll = ({ child, height }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         // justifyContent: "center",
//         height: height
//       }}
//     >
//       {child}

//     </div>
//   );
// };

// const Column = ({ index, style, props }) => {
//   // const { reasons } = props
//   const reasonItems = [
//     "It improves the Immune System",
//     "Prevents Gastrointestinal diseases",
//     "Improved Hydration Levels",
//     "Slows down the aging process"
//   ];
//   return (
//     <div style={style}>
//       <div
//         style={{
//           height: 100,
//           padding: 10,
//           fontSize: 8,
//           fontFamily: "Roboto, sans-serif",
//           color: "#ccc"
//           // backgroundColor: "rgba(52,205,250, 0.3)",
//           // textAlign: "center"
//         }}
//       >
//         {index + 1}
//         <div
//           style={{
//             // border: "1px solid #ccc",
//             borderRadius: 5,
//             boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
//             // backgroundColor: "#eee",
//             backgroundColor: "rgba(52,205,250, 0.3)",
//             height: 300,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center"
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "Open Sans, sans-serif",
//               fontSize: 16,
//               color: "#333"
//             }}
//           >
//             {reasonItems[index]}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Reasons = props => {
//   const { width } = props;

//   // console.log(reasons, width)
//   // console.log(List)
//   return (
//     <List
//       direction="horizontal"
//       height={320}
//       itemCount={4}
//       itemSize={width * 0.8}
//       width={width}
//     >
//       {Column}
//     </List>
//   );
// };

const Hero = () => {
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
        }
      `}
      render={data => {
        return (
          <div width={400}>
            <Img width={450} fluid={data.emptyBottle.childImageSharp.fluid} />
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
          Clean Drinking Water is essential to your Health.
        </h1>
        <p style={{ fontFamily: "Open Sans, sans-serif", color: "#444" }}>
          <i>and here are the reasons why:</i>
        </p>
      </Fade>
    </div>
  );
};

const Reclaim = () => {
  return (
    <div
      style={{ border: "0px solid #red", width: "100%", textAlign: "center" }}
    >
      <Hero />
      <Slide up cascade>
        <div
          style={{
            border: "0px solid tomato",
            color: "#eee",
            fontSize: "40px",
            position: "absolute",
            top: 125,
            zIndex: 1,
            height: "250px"
          }}
        >
          <h3 style={{ fontFamily: "Quicksand, sans-serif" }}>
            What's in your bottle?
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
      </Slide>

      <Slide left>
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
      </Slide>
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
    <div style={{ border: "0px solid blue", overflow: "auto", height: 300 }}>
      {/* <Reasons width={width} /> */}

      <div // SLIDER CONTAINER 1 👽
        style={{
          // border: "2px solid tomato",
          width: 1600,
          float: "left",
          display: "flex",
          height: 260,
          padding: 20
        }}
      >
        {/* CARD  */}
        {/* <div
          className="card"
          style={{
            width: 280,
            border: "0px solid tomato",
            borderRadius: 5,
            boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
            backgroundColor: "#fff",
            padding: 10
          }}
        >
          <div
            style={{
              height: 15,
              borderRadius: 15,
              backgroundColor: "#eee",
              width: 15
            }}
          />
          <span style={{float: 'right'}}>X: {'.'}</span>
        </div> */}

        {/* CARD  */}

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
                  height: 15,
                  borderRadius: 15,
                  backgroundColor: "#eee",
                  width: 15
                }}
              />
              <div
                style={{
                  border: "0px solid tomato",
                  height: "200px",
                  borderRadius: "2px",
                  backgroundColor: "#ccc",
                  backgroundImage: `url(${NatEnv})`,
                  backgroundPosition: 'center'
                }}
              >
                {item}
                {/* <img src={NatEnv} alt="" height="100%" /> */}
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
