import React from 'react'
import { useSpring, animated } from 'react-spring'
// import './styles.css' // // Icons made by Freepik from www.flaticon.com

const styles = {
  container: {
    backgroundColor: "#ccc",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,

  },
  card1: {
    height: 60,
    width: 60,
    backgroundColor: "tomato",
    borderRadius: 5

  },
  card2: {
    height: 50,
    width: 50,
    backgroundColor: "green"
  },
  card3: {
    height: 40,
    width: 60,
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 5

  },
  card4: {
    height: 50,
    width: 50,
    backgroundColor: "pink"
  },
}

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans1b = (x, y) => `translate3d(${x / 100}px,${y / 4-100}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 30}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 -   0}px,${y / 6 - 50}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

export default function Card() {
  
  const calc = (x, y) => [x - 900 / 2, y - 500 / 2]
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={styles.container}>
      <animated.div className="card1" style={Object.assign({}, styles.card1, { transform: props.xy.interpolate(trans1) })} />
      <animated.div className="card1" style={Object.assign({}, styles.card1, { transform: props.xy.interpolate(trans1b) })} />
      <animated.div className="card2" style={Object.assign({}, styles.card2, { transform: props.xy.interpolate(trans2) })} />
      <animated.div className="card3" style={Object.assign({}, styles.card3, { transform: props.xy.interpolate(trans3) })} />
      <animated.div className="card4" style={Object.assign({}, styles.card4, { transform: props.xy.interpolate(trans4) })} />
    </div>
  )
}