import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { globalHistory } from '@reach/router'
import { useGesture } from 'react-with-gesture'
import { animated } from 'react-spring'
import Back from '../assets/left-arrow.svg'
import Fade from 'react-reveal'

const styles = {
  container: {
    // margin: 20,
    padding: 20,
    // fontFamily: ', sans-serif'

    color: "#333"
  },
  blogTitle: {
    fontFamily: "Quicksand, sans-serif",
    color: "#555"
  },
  headerContainer: {
    textAlign: "center"
  },
  header: {
    color: "#003366"
  },
  author: {
    textTransform: "uppercase",
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeight: "bolder"
  },
  content: {
    // textAlign: "justify",
    fontSize: "1.2em",
    lineHeight: "28px",
    fontFamily: "Open Sans, sans-serif"
  },
  by: {
    fontSize: 12,
    fontFamily: "serif",
    marginRight: 10
  },
};

let arrVel = []

const Header = () => {
  // console.log(doc)
  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.header}>Wallace Water</h1>
      <hr />
    </div>
  );
};

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { title, author } = post.frontmatter;

  const config = {
    touch: true, // accept touch input
    mouse: false, // accept mouse input
    passive: { passive: true }, // event handler 3rd argument input, passive by default
    onAction: undefined // event => eventHandler, respond to events outside Reacts render cycle
  };

  // GESTURES
  const [velocity, setVelocity] = useState(0)
  const [distance, setDistance] = useState(0)
  
  const gesture = useGesture( e => {
    setVelocity(e.velocity)
    // setDistance(e.distance)
    // e.velocity > 4 ? console.log(e.velocity) : ''
    
  })
  
  // arrVel.push(velocity);
  // const [max, setMax] = useState(0);
  // useEffect(() => setMax(Math.max(...arrVel)), [max]);

  // console.log(globalHistory.navigate(-1))


  // console.log(typeof post)
  // console.log(max)
  const handleMouseDown = () => console.log('test')
  return (
    <animated.div {...gesture(config)} style={styles.container}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <h1 style={styles.blogTitle}>{title}</h1>
      <p style={styles.author}>
        {/* <span style={styles.by}>by</span> */}
        {author}
    
      </p>


       <button onClick={()=> globalHistory.navigate('/products')}>
        <Fade right>
          <img src={Back} alt='' height={20}/>
        </Fade>
       </button>


      <div
        onMouseDown={handleMouseDown}
        onDragCapture={handleMouseDown}
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </animated.div>
  );
}

export const postQ = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`;
