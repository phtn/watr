import React from "react";
import { Trail, Spring } from "react-spring";
// import { Link } from "gatsby";
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
    minWidth: "264px",
    padding: "10px 24px"
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
    marginRight: 10,
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
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontFamily: 'Roboto, sans-serif',
    letterSpacing: 1,
    opacity: 0.87
  },
  content: {
    fontFamily: 'Quicksand, sans-serif',
    textAlign: 'justify',
    marginBottom: '20px'
  }
};

const Extra = props => {
  const { author, avatar, jobTitle, p1, p2, p3 } = props;
  return (
    <div>
      <p style={styles.author}>
        <img src={avatar} style={styles.avatar} alt='avatar' />
        <strong>{author}</strong>
      </p>
      <p style={styles.jobTitle}>{jobTitle}</p>

      <p style={styles.content}> <strong>Wallace Water </strong>{p1}</p>
      
      <p style={styles.content}>{p2}</p>
      
      <p style={styles.content}>{p3}</p>
    </div>
  );
};

const Card = props => {
  const { title, author, jobTitle, avatar, p1, p2, p3, logo, image, animate, pad } = props;
  return (
    <div
      style={Object.assign({}, styles.container, animate, {
        margin: `20px ${pad + 10}px`
      })}
    >
      <Spring
        from={{ transform: "translate3d(5px, 0px, 0px)" }}
        to={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        {animate => (
          <>
            <h3 style={Object.assign({}, styles.cardTitle, animate)}>
              {title}
            </h3>
            <Extra
              author={author}
              avatar={avatar}
              date={`Dec 25 2018`}
              jobTitle={jobTitle}
              p1={p1}
              p2={p2}
              p3={p3}
              
            />
          </>
        )}
      </Spring>

      {/* <hr style={styles.hr} /> */}
      <img src={logo} alt="" width={"275"} />
      <img src={image} alt="" width={"275"} />
      {/* <Link style={styles.btn} to={`/first-post`}>
        {buttonTitle}
      </Link> */}
    </div>
  );
};

const AboutList = props => {
  const { items, pad, headerTitle, icon } = props;
  return (
    <>
      <div
        style={Object.assign({}, styles.header, { paddingLeft: `${pad + 10}px`, paddingRight: `${pad + 10}px` })}
      >
        <h1 style={styles.headerTitle}>
          <img src={icon} style={styles.icon} alt="" /> {headerTitle}
        </h1>
      </div>
      <Trail
        items={items}
        keys={item => item.id}
        from={{ opacity: 0, transform: "translate3d(0,5px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
      >
        {item => animate => (
          <Card
            title={item.title}
            author={item.author}
            jobTitle={item.jobTitle}
            animate={animate}
            pad={pad}
            logo={item.logo}
            avatar={item.avatar}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            // image={image}
          />
        )}
      </Trail>
    </>
  );
};
export default AboutList;
