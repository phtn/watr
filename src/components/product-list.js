import React from "react";
import { Trail, Spring } from "react-spring";

const styles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // marginTop: "24px",
    minWidth: "264px",
    padding: '30px 24px'
  },
  header: {
    textAlign: "left",
    paddingTop: '55px',
    // border: '1px solid green'
  },
  headerTitle: {
    color: "#999",
    fontSize: "1.3em",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
  },
  cardTitle: {
    fontFamily: "Quicksand, sans-serif",
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
    fontFamily: "Open Sans, sans-serif",
    fontSize: 18,
    textDecoration: "none"
  },
  icon: {
    height: 15,
    marginRight: 10,
    // border: '1px solid green'
  },
  description: {
    fontFamily: 'Quicksand, sans-serif',
    color: "#066b98"
  }
};

const Card = props => {

  const { title, logo, image, description, link, animate, pad, buttonTitle } = props;
  
  return (
    <div
      style={Object.assign({}, styles.container, animate, {
        margin: `20px ${pad + 10}px`
      })}
    >
      
      <img src={logo} alt="" width={"275"} />
      <Spring
        from={{ transform: "translate3d(5px, 0px, 0px)" }}
        to={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        {animate => (
          <h3 style={Object.assign({}, styles.cardTitle, animate)}>{title}</h3>
        )}
      </Spring>
      <p style={styles.description}>{description}</p>
      <hr style={styles.hr} />

      <img src={image} alt="" width={"275"} />
        <a href={link} style={styles.btn}>
          {buttonTitle}
        </a>
    </div>
  );
};

const Trailer = props => {
  const { items, pad, headerTitle, buttonTitle, icon } = props;
  // console.log(pad)
  return (
    <>
      <div style={Object.assign({}, styles.header, {paddingLeft: `${pad + 10}px`, paddingRight: `${pad + 10}px`})}>
         <h1 style={styles.headerTitle}><img src={icon} style={styles.icon} alt=''/> {headerTitle}</h1>
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
            animate={animate}
            pad={pad}
            logo={item.logo}
            image={item.image}
            description={item.description}
            link={item.link}
            buttonTitle={buttonTitle}
          />
        )}
      </Trail>
    </>
  );
};
export default Trailer;
