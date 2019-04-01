import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import AnimatedHero from '../components/animated-hero'
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Fade from 'react-reveal/Fade'

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
        
        <Fade left>
          <p  
            style={{
              fontSize: "0.8em",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 75  ,
              position: "absolute",
              left: '76%',
              zIndex: 0,
              color: 'rgba(0,51,102, 1.0)'
            }}
          >
            $450
          </p>{" "}
        </Fade>

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
          The Crown Berkey™
        </p>{" "}
        <Fade bottom>
          <p  
            style={{
              fontSize: "0.8em",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 75  ,
              position: "absolute",
              left: '25%',
              zIndex: 0,
              color: 'rgba(0,51,102, 1.0)'
            }}
          >
            6 gallons
          </p>{" "}
        </Fade>
        

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
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }

          berkeyPack: file(relativePath: { eq: "berkey-pack.png" }) {
            childImageSharp {
              fixed(height: 300) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }

          bottle: file(relativePath: { eq: "empty-bottle.jpg" }) {
            childImageSharp {
              fixed(height: 300) {
                ...GatsbyImageSharpFixed_tracedSVG
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
