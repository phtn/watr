import React from "react";
import { useTrail, animated } from "react-spring";
import Fade from "react-reveal/Fade";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { globalHistory } from "@reach/router";
import { FixedSizeList as List } from "react-window";

const styles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    display: "flex",
    // alignItems: "center",
    flexDirection: "column",
    marginTop: "24px",
    marginBottom: "24px",
    minWidth: "264px",
    padding: "0px 24px"
  },
  header: {
    textAlign: "left",
    paddingTop: "55px"
  },
  headerTitle: {
    color: "#999",
    fontSize: ".8em",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "bolder",
    textTransform: "uppercase",
    letterSpacing: 2,
    border: "0px solid tomato",
    marginTop: 15
  },
  cardTitle: {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 24,
    lineHeight: "20px",
    paddingTop: 15,
    color: "#333"
  },
  hr: {
    backgroundColor: "#eee",
    height: 3,
    width: "100%",
    marginBottom: 30,
    marginTop: "-5px",
    border: "none"
  },
  btn: {
    marginTop: 30,
    padding: "0 2rem",
    height: "2.5rem",
    lineHeight: "2.5rem",
    borderRadius: "5px",
    background: "#003366",
    boxShadow: "0 4px 14px 0 rgba(0,51,102,0.39)",
    color: "white",
    border: "none",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 18,
    textDecoration: "none",
    marginBottom: 25,
    textTransform: "uppercase",
    textAlign: "center"
  },
  icon: {
    height: 15,
    marginRight: 10
    // border: '1px solid green'
  },
  author: {
    fontSize: 14,
    fontFamily: "Quicksand, sans-serif"
  },
  avatar: {
    height: 14,
    marginRight: 10,
    opacity: 0.8
  },
  jobTitle: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: 1,
    opacity: 0.87
  },
  content: {
    fontFamily: "Quicksand, sans-serif",
    textAlign: "justify"
  }
};



const Static = props => {
  const { index } = props;

  


  return (
    <StaticQuery
      query={graphql`
        query {
          berkeyBundle: file(relativePath: { eq: "berkey-pack.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          berkeyCrown: file(relativePath: { eq: "berkey-crown.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          blackBerkey: file(relativePath: { eq: "black-berkey.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          fluorideRedux: file(relativePath: { eq: "fluoride-redux.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          berkeyShower: file(relativePath: { eq: "berkey-shower.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          waterviewSpigot: file(relativePath: { eq: "waterview-spigot.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }


          white: file(relativePath: { eq: "white.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        // console.log(data.bigberkey.childImageSharp.fluid);
        const bundle = [
          data.berkeyBundle.childImageSharp.fluid,
          data.berkeyCrown.childImageSharp.fluid,
          data.blackBerkey.childImageSharp.fluid,
          data.fluorideRedux.childImageSharp.fluid,
          data.berkeyShower.childImageSharp.fluid,
          data.waterviewSpigot.childImageSharp.fluid,

          data.white.childImageSharp.fluid,
        ];

        const Column = ({ index, style }) => {
          // console.log(bundle[0])
          return (
            <div style={style}>
              <div
                style={{
                  border: "0px solid gray",
                  height: 330,
                  borderRadius: 3,
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  marginRight: 20,
                }}
              >
                <Img fluid={bundle[index]} />
              </div>
            </div>
          );
        };


        return (
          <div style={{ overflow: "hidden", padding: 0, height: 340 }}>


            <List // LIST  ️️️️️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
              height={340}
              itemCount={bundle.length}
              itemSize={360}
              layout="horizontal"
              // width={300}
              width={
                typeof global.innerWidth !== undefined ? global.innerWidth : 300
              }
            >
              {Column}
            </List>



          </div>
        );
      }}
    />
  );
};

const Extra = props => {
  const { author, jobTitle, description } = props;
  return (
    <div>
      <p style={styles.author}>
        {/* <img src={avatar} style={styles.avatar} alt="avatar" /> */}
        <strong>{author}</strong>
      </p>
      <p style={styles.jobTitle}>{jobTitle}</p>
      <p style={styles.content}>{description}</p>
    </div>
  );
};

const Card = props => {
  const {
    title,
    author,
    jobTitle,
    avatar,
    description,
    pad,
    itemCount,
    index,
    path
    // buttonTitle
  } = props;

  console.log(
    itemCount === 1
      ? `1 item on this page : ${globalHistory.location.pathname}`
      : ` items found on this page : ${globalHistory.location.pathname}`
  );

  return (
    <div
      style={Object.assign({}, styles.container, {
        margin: `10px ${pad}px`
      })}
    >
      <h3 style={Object.assign({}, styles.cardTitle)}>{title}</h3>
      {/* <Extra
        author={author}
        avatar={avatar}
        date={`Dec 25 2018`}
        jobTitle={jobTitle}
        description={description}
      /> */}

      <Static index={index} />

      {/* <hr style={styles.hr} /> */}
      {/* <img src={logo} alt="" width={"275"} /> */}
      {/* <img src={image} alt="" width={"275"} /> */}
      <Link style={styles.btn} to={path}>
        {globalHistory.location.pathname.substr(1, 100) === "products"
          ? "get this bundle"
          : "read more"}
      </Link>
    </div>
  );
};

const config = { mass: 5, tension: 2000, friction: 200 };

// MAIN COMPONENT
const BlogList = props => {
  const { items, pad, headerTitle } = props; // { itemCount }

  // ⚠️ TRAIL
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 }
  });

  return (
    <>
      <div
        style={Object.assign({}, styles.header, {
          paddingLeft: `${pad + 10}px`,
          paddingRight: `${pad + 10}px`
        })}
      >
        <h1 style={styles.headerTitle}>
          {/* <img src={icon} style={styles.icon} alt="" />  */}

          <Fade left cascade>
            {`${headerTitle}`}
          </Fade>
        </h1>
      </div>

      {/*  ⚠️  */}
      {trail.map(({ opacity, x }, index) => {
        // console.log(items[index].node.id)
        return (
          <animated.div
            key={items[index].node.id}
            style={{
              opacity,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <Card
              pad={pad}
              itemCount={items.length}
              buttonTitle={index}
              title={items[index].node.frontmatter.title}
              path={items[index].node.frontmatter.path}
              author={items[index].node.frontmatter.author}
              description={items[index].node.frontmatter.description}
              avatar={items[index].node.frontmatter.avatar}
              index={index}
            />
          </animated.div>
        );
      })}
    </>
  );
};
export default BlogList;
