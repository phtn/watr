import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import AnimatedHero from '../components/animated-hero'
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const pages = [
  ({ style, image }) => (
    <animated.div
      style={{ ...style, width: "100%", height: 300, background: "white", overflow: 'hidden' }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p
          style={{
            fontSize: "1em",
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 50,
            position: "absolute",
            color: "white",
            zIndex: 3
          }}
        >
          {`What's in your bottle?`}
        </p>{" "}
        <br />
        {/* <img src={Bottle} height={300} alt=''/> */}
        <Img fixed={image} />

        <div style={{position: 'absolute', zIndex: 2}}>
          <AnimatedHero/>
        </div>
      </div>
    </animated.div>
  ),
  ({ style, image }) => (
    <animated.div
      style={{ ...style, width: "100%", height: 300, background: "white", overflow: 'hidden' }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "1em",
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 10,
            position: "absolute"
          }}
        >
          Berkey Bundle
        </p>{" "}
        <br />
        {/* <img src={BerkeyPack} height={270} alt='' /> */}
        <Img fixed={image} />
      </div>
    </animated.div>
  ),
  ({ style, image }) => (
    <animated.div
      style={{ ...style, width: "100%", height: 300, background: "white", overflow: 'hidden' }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "1em",
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 10,
            position: "absolute",
            zIndex: 1
          }}
        >
          Berkey Crown
        </p>{" "}
        <br />
        {/* <img src={BerkeyCrown} height={270} alt='' /> */}
        <Img fixed={image} />
      </div>
    </animated.div>
  )
];

export default function App() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(150%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" }
  });
  return (
    <StaticQuery
      query={graphql`
        query {
          berkeyCrown: file(relativePath: { eq: "berkey-crown.png" }) {
            childImageSharp {
              fixed(height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          berkeyPack: file(relativePath: { eq: "berkey-pack.png" }) {
            childImageSharp {
              fixed(height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          bottle: file(relativePath: { eq: "empty-bottle.jpg" }) {
            childImageSharp {
              fixed(height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        const images = [
          data.bottle.childImageSharp.fixed,
          data.berkeyPack.childImageSharp.fixed,
          data.berkeyCrown.childImageSharp.fixed
        ];
        // console.log(images[0])
        return (
          <div className={"animated-trans"} onClick={onClick}>
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item];
              // console.log(images[item])
              return <Page key={key} style={props} image={images[item]} />;
            })}
          </div>
        );
      }}
    />
  );
}
