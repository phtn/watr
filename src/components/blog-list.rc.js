import React from "react";
import { useTrail, animated } from "react-spring";

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
    fontSize: "1.3em",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100
  },
  cardTitle: {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 24,
    lineHeight: "20px",
    paddingTop: 15
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
    background: "#0076ff",
    boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
    color: "white",
    border: "none",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 18,
    textDecoration: "none"
  },
  icon: {
    height: 15,
    marginRight: 10
    // border: '1px solid green'
  },
  author: {
    fontSize: 16,
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

const Extra = props => {
  const { author, avatar, jobTitle, intro } = props;
  return (
    <div>
      <p style={styles.author}>
        <img src={avatar} style={styles.avatar} alt="avatar" />
        <strong>{author}</strong>
      </p>
      <p style={styles.jobTitle}>{jobTitle}</p>
      <p style={styles.content}>{intro}</p>
    </div>
  );
};

const Card = props => {
  const { title, author, jobTitle, avatar, intro, logo, image, pad } = props;
  return (
    <div
      style={Object.assign({}, styles.container, {
        margin: `20px ${pad + 10}px`
      })}
    >
      <h3 style={Object.assign({}, styles.cardTitle)}>{title}</h3>
      {/* <Extra
        author={author}
        avatar={avatar}
        date={`Dec 25 2018`}
        jobTitle={jobTitle}
        intro={intro}
      /> */}

      {/* <hr style={styles.hr} /> */}
      <img src={logo} alt="" width={"275"} />
      <img src={image} alt="" width={"275"} />
      {/* <Link style={styles.btn} to={`/first-post`}>
        {buttonTitle}
      </Link> */}
    </div>
  );
};

const config = { mass: 5, tension: 2000, friction: 200 };

const BlogList = props => {
  const { items, pad, headerTitle, icon } = props;

  

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
          <img src={icon} style={styles.icon} alt="" /> {headerTitle}
        </h1>
      </div>

      {/*  ⚠️  */}
      {trail.map(({ opacity, x }, index) => {
        console.log(items[index].node.id)
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
              // logo={items[index].logo}
              // avatar={items[index].avatar}
              // intro={items[index].intro}


              title={items[index].node.frontmatter.title}
              path={items[index].node.frontmatter.path}
              author={items[index].node.frontmatter.author}
              // createdAt={items[index].node.frontmatter.createdAt}
              // description={items[index].node.frontmatter.description}
              // avatar={items[index].node.frontmatter.avatar}
              // readTime={items[index].node.frontmatter.readTime}

              // title={'tesla'}


            />
          </animated.div>
        );
      })}
    </>
  );
};
export default BlogList;
