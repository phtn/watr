import React from "react";
import { Trail, Spring } from "react-spring";
import { Link } from "gatsby";
import Hourglass from "../assets/hourglass.svg";
import Fade from 'react-reveal/Fade'






const styles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    display: "flex",
    // alignItems: "center",
    flexDirection: "column",
    // marginTop: "24px",
    minWidth: "264px",
    padding: '0px 24px 24px 30px',
  },
  header: {
    textAlign: "left",
    paddingTop: '55px'
  },
  headerTitle: {
    color: "#999",
    fontSize: "1.3em",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100
  },
  cardTitle: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: '24px',
    lineHeight: "24px",
    // paddingTop: 15
    // border: '1px solid red'
  },
  // hr: {
  //   backgroundColor: "#eee",
  //   height: 3,
  //   width: "100%",
  //   marginBottom: 30,
  //   marginTop: "-5px",
  //   border: "none"
  // },
  btn: {
    marginTop: '30px',
    padding: "0 2rem",
    height: "2.5rem",
    lineHeight: "2.5rem",
    borderRadius: "5px",
    backgroundImage: 'linear-gradient(to right, #34CDFA, #E8D9F1',
    // background: "rgb(0,118,255)",
    boxShadow: "0 4px 14px 0 rgba(0,118,118,0.5)",
    color: "#fff",
    border: "none",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    fontSize: 18,
    textDecoration: "none",
    textAlign: "center",
    float: "left",
    // textTransform: "uppercase",
    // letterSpacing: 1,
    // width: 200,
    position: "relative"
  },
  icon: {
    height: 15,
    marginRight: '10px'
    // border: '1px solid green'
  },
  author: {
    marginTop: "0px",
    fontSize: 12,
    fontFamily: "Quicksand, sans-serif",
    opacity: 1
  },
  read: {
    fontSize: 10,
    fontFamily: "Quicksand, sans-serif"
  },
  hourglass: {
    height: 10,
    float: "left",
    marginRight: 10,
    opacity: 0.7
  },
  description: {
    marginTop: "-12px",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: 1
  }
};

const Extra = props => {
  const { author, createdAt, description, readTime } = props;
  // console.log(props)
  return (
    <div>
      <Spring
        from={{
          opacity: { value: 0, delay: 1500 },
          transform: `translate3d(0px, -10px, 0px)`
        }}
        to={{ opacity: 1, transform: `translate3d(0px, 0px, 0px)` }}
      >
        {animate => (
          <p style={Object.assign({}, styles.description, animate)}>
            {description}
          </p>
        )}
      </Spring>

      <p style={styles.author}>
        <strong>{author}</strong> &middot; {createdAt}
      </p>
      <div>
        <img src={Hourglass} style={styles.hourglass} alt="hg" />
        <p style={styles.read}>{readTime}</p>
      </div>
    </div>
  );
};

const Card = props => {
  const {
    title,
    path,
    author,
    description,
    createdAt,
    // avatar,
    readTime,
    logo,
    image,
    animate,
    pad,
    buttonTitle
  } = props;
  return (
    <div
      style={Object.assign({}, styles.container, animate, {
        margin: `0px ${pad + 10}px 30px ${pad + 10}px`
      })}
    >
      <Spring
        from={{ transform: "translate3d(-5px, 0px, 0px)" }}
        to={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        {animate => (
          <>
            <h3 style={Object.assign({}, styles.cardTitle, animate)}>
              {title}
            </h3>
            <Extra
              author={author}
              createdAt={createdAt}
              readTime={readTime}
              description={description}
            />
          </>
        )}
      </Spring>
      {/* <hr style={styles.hr} /> */}
      <img src={logo} alt="" width={"275"} />
      <img src={image} alt="" width={"275"} />
      <Link
        style={styles.btn}
        to={path}
        onMouseEnter={e => (e.target.style.backgroundColor = "rgb(0,132,255)")}
        onMouseLeave={e => (e.target.style.backgroundColor = "rgb(0,118,255)")}
      >
        {buttonTitle}
      </Link>
    </div>
  );
};

const BlogList = props => {
  const { items, pad, headerTitle, buttonTitle, icon } = props;
  return (
    <>
      <div
        style={Object.assign({}, styles.header, { paddingLeft: `${pad + 10}px`, paddingRight: `${pad + 10}px` })}
      >
        <h1 style={styles.headerTitle}>
          <img src={icon} style={styles.icon} alt="" /> 
          <Fade left cascade>
            <span>{headerTitle}</span>
          </Fade>
        </h1>
      </div>
      <Trail
        items={items}
        keys={item => item.node.id}
        from={{ opacity: 0, transform: "translate3d(0,5px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
      >
        {item => animate => (
          <Card
            title={item.node.frontmatter.title}
            path={item.node.frontmatter.path}
            author={item.node.frontmatter.author}
            createdAt={item.node.frontmatter.createdAt}
            description={item.node.frontmatter.description}
            avatar={item.node.frontmatter.avatar}
            readTime={item.node.frontmatter.readTime}
            animate={animate}
            pad={pad}
            logo={item.logo}
            // image={image}
            buttonTitle={buttonTitle}
          />
        )}
      </Trail>
    </>
  );
};
export default BlogList;
