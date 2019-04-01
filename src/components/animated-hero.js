import React from "react";
import { useSpring, animated } from "react-spring";
// import './styles.css' // // Icons made by Freepik from www.flaticon.com
/* eslint-disable */
const styles = {
  container: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 300
  },
  card1: {
    height: 30,
    width: 30,
    backgroundColor: "transparent",
    borderRadius: 30,
    opacity: 0.8,
    fontSize: 16
  },
  card2: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    fontSize: 20
  },
  card3: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
    fontSize: 16
  },
  card4: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    fontSize: 22
  }
};

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans1b = (x, y) => `translate3d(${x / 100}px,${y / 4 - 100}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 30}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 0}px,${y / 6 - 50}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 5.5}px,${y / 3.5}px,0)`;

export default function Card() {
  const calc = (x, y) => [x - 900 / 2, y - 500 / 2];
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      style={styles.container}
    >
      <animated.div
        className="card1"
        style={Object.assign({}, styles.card1, {
          transform: props.xy.interpolate(trans1)
        })}
      >
        <span role='img'>🦠</span>
      </animated.div>
      <animated.div
        className="card1"
        style={Object.assign({}, styles.card1, {
          transform: props.xy.interpolate(trans1b)
        })}
      >
        <span role='img'>🦠</span>
      </animated.div>
      <animated.div
        className="card2"
        style={Object.assign({}, styles.card2, {
          transform: props.xy.interpolate(trans2)
        })}
      >
        <span role='img'>🦠</span>
      </animated.div>
      <animated.div
        className="card3"
        style={Object.assign({}, styles.card3, {
          transform: props.xy.interpolate(trans3)
        })}
      >
        <span role='img'>🦠</span>
      </animated.div>
      <animated.div
        className="card4"
        style={Object.assign({}, styles.card4, {
          transform: props.xy.interpolate(trans4)
        })}
      >
        {" "}
        <span role='img'>🦠</span>
      </animated.div>
    </div>
  );
}
