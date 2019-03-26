import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { FixedSizeList as List } from "react-window";

const quotes = [
  "Freedom!!!",
  "Today is not yesterday",
  "We chose to go to the moon not because it is easy but because it is hard.",
  "I shall return."
];
const authors = [
  "William Wallace",
  "Abraham Lincoln",
  "JFK",
  "Gen McArthur"
];

const Card = ({ index }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 3, tension: 350, friction: 80 }
  });

  return (
    <div onClick={() => set(state => !state)}>
      <a.div
        style={{
          marginLeft: "20px",
          borderRadius: 5,
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
          // border: '1px solid gray',
          height: 240,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 260,
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          position: "absolute"
          // padding: 20
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            padding: 20,
            textAlign: "center"
          }}
        >
          {quotes[index]}
        </div>
      </a.div>
      <a.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 20px",
          borderRadius: 5,
          backgroundColor: "tomato",
          color: "#fff",
          height: 240,
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        {authors[index]}
      </a.div>
    </div>
  );
};

const Column = ({ index, style }) => {
  return (
    <div style={style}>
      <Card index={index} />
    </div>
  );
};

const QuotesMachine = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <List
        height={280}
        itemCount={quotes.length}
        itemSize={300}
        layout="horizontal"
        // width={1000}
        width={typeof global.innerWidth !== undefined ? global.innerWidth : 900}
      >
        {Column}
      </List>
    </div>
  );
};

export default QuotesMachine;
