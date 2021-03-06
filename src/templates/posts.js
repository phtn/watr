import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";
// import { useGesture } from 'react-with-gesture'
import { animated } from "react-spring";
import Back from "../assets/left-arrow.svg";
import Fade from "react-reveal";

const styles = {
  container: {
    backgroundColor: 'white',
    padding: 20,
    color: "#333"
  },
  blogTitle: {
    fontFamily: "Quicksand, sans-serif",
    color: "#555",
    fontSize: 24,
    fontWeight: "bolder"
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
    fontFamily: "Open Sans, sans-serif",
    marginBottom: 100
  },
  by: {
    fontSize: 12,
    fontFamily: "serif",
    marginRight: 10
  },
  backBtn: {
    background: 'transparent',
    border: 'none'

  },
  titles: {
    fontSize: 12
  }
};

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

  const dir = globalHistory.location.pathname
  const ten = dir.substr(1,10)

  const checkDir = (firstTen) => {
    return firstTen.includes('products') ? 'products' : 'blog'
  }

  // REACT WITH GESTURE 👋👋👋👋👋
  // const config = {
  //   touch: true, // accept touch input
  //   mouse: false, // accept mouse input
  //   passive: { passive: true }, // event handler 3rd argument input, passive by default
  //   onAction: undefined // event => eventHandler, respond to events outside Reacts render cycle
  // };

  // arrVel.push(velocity);
  // const [max, setMax] = useState(0);
  // useEffect(() => setMax(Math.max(...arrVel)), [max]);

  // console.log(globalHistory.navigate(-1))

  // console.log(typeof post)
  // console.log(max)


  const handleMouseDown = () => console.log("test");

  return (
    <animated.div style={styles.container}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>
      <Header />

      <Fade top>
        <h1 style={styles.blogTitle}>{title}</h1>
      </Fade>

      <Fade left>
        <p style={styles.author}>
          {/* <span style={styles.by}>by</span> */}
          by: {author}
        </p>
      </Fade>

      <button style={styles.backBtn} onClick={() => {
        console.log(checkDir(ten))
        globalHistory.navigate(`/${checkDir(ten)}`)
      }}>
        <Fade right>
          <img src={Back} alt="" height={20} />
        </Fade>
      </button>

      <div
        
        onMouseDown={handleMouseDown}
        onDragCapture={handleMouseDown}
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: `${post.html}`  }}
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
