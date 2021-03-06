import React from "react";
import { useTrail, animated } from "react-spring";
import Fade from "react-reveal/Fade";
// import { StaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import { globalHistory } from "@reach/router";
import Kyle from "../assets/man.svg";
import Will from "../assets/will.jpg";

const styles = {
  container: {
    // backgroundColor: "green",
    // borderRadius: "1600px",
    // boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    display: "flex",
    // alignItems: "center",
    flexDirection: "column",
    marginTop: "24px",
    marginBottom: "24px",
    minWidth: "264px",
    padding: "10px 0px"
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
    // lineHeight: "20px",
    // paddingTop: 15,
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
  },
  avatarContainer: {
    // border: '1px solid red',
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarFrame: {
    // border: '1px solid blue',
    width: 200,
    height: 200,
    borderRadius: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: `url(${KylePlaceholder})`,
    backgroundPosition: "center"
  },
  companyTitle: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontFamily: "Roboto, sans-serif",
    fontSize: 12
  }
};

// ⚠️ EXTRA ⚠️

const Extra = props => {
  const { jobTitle, description } = props;
  return (
    <div>
      <p style={styles.author}>
        {/* <img src={avatar} style={styles.avatar} alt="avatar" /> */}
        {/* <strong>{author}</strong> */}
      </p>
      <p style={styles.jobTitle}>{jobTitle}</p>
      <p style={styles.content}>{description}</p>
    </div>
  );
};

// ⚠️⚠️ CARD COMPONENT ⚠️⚠️

const Card = props => {
  const {
    title,
    author,
    rank,
    jobTitle,
    avatar,
    description,
    pad,
    itemCount,
    index
    // path,
    // buttonTitle
  } = props;

  console.log(
    itemCount === 1
      ? `1 item on this page: ${globalHistory.location.pathname}`
      : ` items found on this page: ${globalHistory.location.pathname}`
  );

  const images = [Kyle, Kyle, Will];

  return (
    <div
      style={Object.assign({}, styles.container, {
        margin: `20px ${pad + 10}px`
      })}
    >
      {/* 🔻🔻🔻🔻🔻 */}

      {/* 🐯🐯🐯 AVATAR 🥶🥶🥶 🐮🐮🐮 ⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠ */}
      <div style={styles.avatarContainer}>
        <div
          style={Object.assign({}, styles.avatarFrame, {
            backgroundImage: `url(${images[index]})`,
            backgroundPosition: "center center",
            backgroundSize: 'cover'
            
          })}
        >
          {/* {author} */}
        </div>
      </div>

      {/*  AUTHOR  */}
      <div style={{ textAlign: "center", border: "0px solid tomato" }}>
        <p style={styles.author}>
          {/* <img src={avatar} style={styles.avatar} alt="avatar" /> */}
          <strong>{author}</strong>
        </p>
      </div>

      <div style={{ textAlign: "center", border: "0px solid papayawhip" }}>
        <p style={styles.author}>
          {/* <img src={avatar} style={styles.avatar} alt="avatar" /> */}
          <span style={styles.companyTitle}>{rank}</span>
        </p>
      </div>

      {/* ⚠️ AUTHOR ⚠️ */}
      <div
        style={{
          border: "0px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h3 style={Object.assign({}, styles.cardTitle)}>{title}</h3>
      </div>

      {/* 🔺🔺🔺🔺🔺 */}

      <Extra
        author={author}
        avatar={avatar}
        date={`Dec 25 2018`}
        jobTitle={jobTitle}
        description={description}
      />

      {/* <Static index={index} /> */}

      {/* <hr style={styles.hr} /> */}
      {/* <img src={logo} alt="" width={"275"} /> */}
      {/* <img src={image} alt="" width={"275"} /> */}
      {/* <Link style={styles.btn} to={path}>
        {globalHistory.location.pathname.substr(1, 100) === "products"
          ? "view products"
          : "read more"}
      </Link> */}
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span style={{ letterSpacing: 5, color: "#fff" }}>
          &middot; &middot; &middot;
        </span>
      </div>
    </div>
  );
};

const config = { mass: 5, tension: 2000, friction: 200 };

// ⚠️⚠️ MAIN COMPONENT ⚠️⚠️
const BlogList = props => {
  const { items, pad, headerTitle } = props;

  // console.log(itemCount, 'items total');

  // ⚠️ TRAIL DEFINITIONS ⚠️
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

      {/*  ⚠️ TRAIL ️m⚠P️  ⚠️ */}
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
              // title={items[index].title}
              // author={items[index].author}
              // jobTitle={items[index].jobTitle}
              pad={pad}
              itemCount={items.length}
              // logo={items[index].logo}
              // avatar={items[index].avatar}
              // intro={items[index].intro}
              buttonTitle={index}
              title={items[index].node.frontmatter.title}
              path={items[index].node.frontmatter.path}
              author={items[index].node.frontmatter.author}
              rank={items[index].node.frontmatter.rank}
              // createdAt={items[index].node.frontmatter.createdAt}
              description={items[index].node.frontmatter.description}
              avatar={items[index].node.frontmatter.avatar}
              // readTime={items[index].node.frontmatter.readTime}

              index={index}
              // title={'tesla'}
            />
          </animated.div>
        );
      })}
    </>
  );
};
export default BlogList;
