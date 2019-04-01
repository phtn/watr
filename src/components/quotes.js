import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { FixedSizeList as List } from "react-window";
import LeftQuote from "../assets/left-quote.svg";
import WilliamWallace from "../assets/ww.jpg";
import Lincoln from '../assets/lincoln.jpg'
import JFK from '../assets/jfk.jpeg'
import Trump from '../assets/trump.jpg'



const quotes = [
  "FREEDOM!",
  "Most folks are as happy as they make their minds to be.",
  "We chose to go to the moon not because it is easy but because it is hard.",
  "Make America Great Again.",
  "I shall return."
];
const authors = [
  { name: "William Wallace", image: WilliamWallace },
  { name: "Abraham Lincoln", image: Lincoln },
  { name: "JFK", image: JFK },
  { name: "Donald Trump", image: Trump },
  { name: "Douglas MacArthur", image: WilliamWallace }
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
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          width: 260,
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          position: "absolute"
          // padding: 20
        }}
      >
        <div
          style={{
            // border: "1px solid gray",
            padding: 20,
            textAlign: "left"
            // height: 20
          }}
        >
          <img src={LeftQuote} height={20} alt="" />
        </div>

        <div
          style={{
            // border: "1px solid gray",
            padding: 20,
            textAlign: "center",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 100,
              fontSize: 22,
              color: "rgba(0,51,102,1)"
            }}
          >
            {quotes[index]}
          </h1>
        </div>

        <div
          style={{
            // border: "1px solid gray",
            padding: 20,
            textAlign: "right"
          }}
        >
          <img
            src={LeftQuote}
            height={20}
            alt=""
            style={{
              transform: "rotate(180deg)"
            }}
          />
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
          backgroundImage: `url(${authors[index].image})`,
          backgroundPosition: "center",
          color: "#fff",
          height: 240,
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        <h1 style={{
          fontFamily: 'Cinzel, serif',
          fontWeight: 100,
          fontSize: 20,
          marginTop: 185,
          padding: '5px 15px',
          borderRadius: 3,
          letterSpacing: 1,
          backgroundColor: 'rgba(0,51,102,0.7)',
        }}>{authors[index].name}</h1>
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
