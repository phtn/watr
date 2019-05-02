import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";


import AnimatedTransition from "../components/animated-transition";

import QuotesMachine from "../components/quotes";
import Newsletter from "../components/newsletter";
import Drop from "../assets/drop.svg";

// import { useInterval } from "../hooks/useInterval";
import "../animate.css";

import TwitterLogo from "../assets/twitter.svg";

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
  }
};

const Essential = ({width, title, header, content}) => {
  // console.log(width)
  return (
    <div style={{ textAlign: "justify", padding: 15 }}>
      <Fade bottom>
        <h1
          style={{
            fontSize: 24,

            fontFamily: "Roboto, sans-serif",
            fontWeight: "100px",
            textAlign: "center"
          }}
        >
          {title}
        </h1>

        <div // hr -----
          style={{
            height: 3,
            width: 75,
            backgroundColor: "rgba(0,51,102, 1)",
            margin: "30px auto"
            // opacity: 0.5
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* <img src={Drop} alt="" height={50} style={{ margin: "30px auto" }} /> */}
        </div>
        <div style={{padding: `0px ${width > 1000 ? 300 : 20}px`}}>

          <h3 style={{color: 'rgb(0, 51,102)'}}>{header}</h3>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#444",
              fontSize: 14,

            }}
          >
            {/* <i>{`Read qoutes below and guess who wrote them.`}</i> */}
            {content}
          </p>
        </div>
      </Fade>
    </div>
  );
};

const Reclaim = props => {
  // eslint-disable-next-line
  const { width } = props;
  // const slogans = ["bottle", "lake"];

  // let [count, setCount] = useState(0);

  // function runSlogans(items) {
  //   count < items.length - 1 ? setCount(count + 1) : setCount(0);
  // }
  // // eslint-disable-next-line
  // function HeroLabel() {
  //   return <span className="animated fadeInUp">{`${slogans[count]}`}</span>;
  // }

  // useInterval(() => {
  //   // Your custom logic here
  //   runSlogans(slogans);
  // }, 8000);



  return (
    <div
      style={{ border: "0px solid #red", width: "100%", textAlign: "center" }}
    >
      <div
        style={{
          height: width < 450 ? 300 : 300,
          display: "flex",
          margin: 0,
          padding: 0,
          // overflow: "hidden"
        }}
      >
        <AnimatedTransition width={width}/>
      </div>
      
      <a href='https://twitter.com/wallace_water' style={{textDecoration: 'none'}}>

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
              fontSize: 17,
              color: "rgb(0,51,102)",
              padding: "10px 20px",
              backgroundColor: "#fff",
              borderRadius: 5,
              boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
              lineHeight: "20px"
            }}
          >
            <img
              src={TwitterLogo}
              height={18}
              alt=""
              style={{
                marginRight: 10,
                lineHeight: 24
              }}
            />{" "}
            #ReclaimYourFreedom
          </h1>
        </div>
      </a>

    </div>
  );
};

const Bridge = props => {
  // const { width } = props
  // console.log(width)
  return <div style={styles.bridge}>{props.component}</div>;
};

const ProductsLink = props => {
  return (
    <div style={{ border: "0px solid red" }}>
      <Link to='/products'>
        <button
          style={{
            backgroundColor: "rgb(0,51,102)",
            color: "white",
            height: 50,
            width: 200,
            fontSize: 16,
            borderRadius: 5,
            padding: "0 20"
          }}
        >
          View All Products
        </button>
      </Link>
    </div>
  );
};

const Links = props => {
  const { url } = props
  return (
    <div style={{
      backgroundColor: "rgb(0,51,102)",
      color: "white",
      height: 50,
      width: 200,
      fontSize: 16,
      borderRadius: 5,
      padding: "0 20",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <Link style={{color: 'white', letterSpacing: '0.5px', textDecoration: 'none'}} to={url}>Learn More</Link>
    </div>
  )
}

const Divider = props => {
  const { value } = props
  return (
    <hr style={{width: '300px', border: '1px solid #eee',}}/>
  )
}

const cardBoardList = [
  {title: 'About Wallace Water', header: 'Research',  content: `Wallace Water is the creation from years of research and testing water
  quality for homeowners, family, and friends to help them make an
  educated decision on what's worthwhile to purchase for their household
  needs. Educating the community one at a time was fulfilling, yet too
  much time was invested on those who really don’t have the right
  knowledge or drive to stop consuming city tap water and big business
  bottled water.`},
  {title: 'Benefits of Filtered Water', header: 'Life Changing Effects', content: 'Water is Essential to our health.'}
]

// 🏆 🏆 🏆
const Index = () => {
  const [width, setWidth] = useState(typeof global !== 'undefined' && global.innerWidth)

  useEffect(()=> {
    const handleWidthResize = () => setWidth(typeof global !== 'undefined' && global.innerWidth)
    // typeof global !== 'undefined' ? global.addEventListener('resize', handleWidthResize) : undefined
    // typeof global !== 'undefined' && global.addEventListener('resize', handleWidthResize)

    
    return () => (typeof global !== 'undefined' && global.removeEventListener('resize', handleWidthResize))
  }, [width])
  
  // console.log(pad)
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100|Abril+Fatface|Cinzel"
          rel="stylesheet"
        />
      </Helmet>

      <Layout title={`William Wallace Water`}>
        <div style={{ height: 50 }} />
        {/* <Landing /> */}
        <Bridge component={<Reclaim width={width}/>} />

        <Bridge component={<Essential width={width} title={cardBoardList[0].title} header={cardBoardList[0].header} content={cardBoardList[0].content} />} />

        {/* <Bridge component={<ProductsLink />} /> */}
        <Bridge component={<Links url={'/blog/the-state-of-our-water'}/>} />

        <Bridge component={<Divider/>} />
        
        {/* <Bridge component={<Placeholder value={`Types of Drinking Water Contaminants`}/>} /> */}

        <Bridge component={<Essential width={width} title={cardBoardList[1].title} header={cardBoardList[1].header} content={cardBoardList[1].content} />} />
        <QuotesMachine />
        <Bridge component={<Newsletter />} />
      </Layout>
    </>
  );
};
export default Index;
