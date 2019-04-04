import React from "react";
import { useTrail, animated } from "react-spring";
import Fade from "react-reveal/Fade";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { globalHistory } from "@reach/router";

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
    padding: "10px 24px"
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
          bigberkey: file(relativePath: { eq: "berkey-logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          kangen: file(relativePath: { eq: "k8.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          rainsoft: file(relativePath: { eq: "ec5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          ionfaucet: file(relativePath: { eq: "ionfaucet-logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          dawn: file(relativePath: { eq: "dawn.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          waterSplash: file(relativePath: { eq: "water-splash.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

          water: file(relativePath: { eq: "water.png" }) {
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
        const images2d = [
          [
            //products
            data.bigberkey.childImageSharp.fluid,
            data.kangen.childImageSharp.fluid,
            data.rainsoft.childImageSharp.fluid,
            data.ionfaucet.childImageSharp.fluid
          ],

          [
            // blogs
            data.dawn.childImageSharp.fluid,
            data.waterSplash.childImageSharp.fluid,
            data.water.childImageSharp.fluid
          ],

          [
            // company
            data.water.childImageSharp.fluid,
            data.water.childImageSharp.fluid,
            data.ionfaucet.childImageSharp.fluid
          ]
        ];
        // console.log(images2d)
        // console.log(globalHistory.location.pathname === '/products' )
        // console.log(images2d[getPath(globalHistory.location.pathname)]);

        function dispatchImage(index) {
          return (
            <div>
              <Img
                fluid={
                  images2d[getPath(globalHistory.location.pathname)][index]
                }
              />
            </div>
          );
        }

        // console.log(index)
        function getPath(path) {
          switch (path) {
            case "/products":
              return 0;
            case "/blog":
              return 1;
            case "/company":
              return 2;

            default:
              return 0;
          }
        }

      

        // const img_0 = images2d[getPath(globalHistory.location.pathname)][1]

        return <div>{dispatchImage(index)}</div>;
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
    path,
    // buttonTitle
  } = props;

  console.log(itemCount === 1 ? `1 item on this page : ${globalHistory.location.pathname}` : ` items found on this page : ${globalHistory.location.pathname}`);

  return (
    <div
      style={Object.assign({}, styles.container, {
        margin: `20px ${pad + 10}px`
      })}
    >
      <h3 style={Object.assign({}, styles.cardTitle)}>{title}</h3>
      <Extra
        author={author}
        avatar={avatar}
        date={`Dec 25 2018`}
        jobTitle={jobTitle}
        description={description}
      />

      <Static index={index} />

      {/* <hr style={styles.hr} /> */}
      {/* <img src={logo} alt="" width={"275"} /> */}
      {/* <img src={image} alt="" width={"275"} /> */}
      <Link style={styles.btn} to={path}>
        {globalHistory.location.pathname.substr(1, 100) === "products"
          ? "view products"
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
