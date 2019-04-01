import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import BerkeyPack from "../assets/berkey-pack.png";
import BerkeyCrown from "../assets/berkey-crown.png";
import Bottle from '../assets/empty-bottle.jpg'
const pages = [
  ({ style }) => (
    <animated.div
      style={{ ...style, width: "100%", height: 300, background: "white" }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
        <p
          style={{
            fontSize: "1em",
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            position: "absolute",
            color: 'white'
          }}
        >
          {`What's in your bottle?`}
        </p>{" "}
        <br />
        <img src={Bottle} height={300} alt=''/>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{ ...style, width: "100%", height: 300, background: "white" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "1em",
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            position: "absolute"
          }}
        >
          Berkey Bundle
        </p>{" "}
        <br />
        <img src={BerkeyPack} height={270} alt='' />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{ ...style, width: "100%", height: 300, background: "white" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "1em",
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            position: "absolute"
          }}
        >
          Berkey Crown
        </p>{" "}
        <br />
        <img src={BerkeyCrown} height={270} alt='' />
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
    <div className={"animated-trans"} onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}
