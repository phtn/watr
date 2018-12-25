import React from "react";
import { Trail, Spring } from "react-spring";

const styles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    // -webkit-box-shadow: '0 2px 4px 0 rgba(14,30,37,.12)',
    boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)",
    color: "rgba(14,30,37,.54)",
    // display: "-webkit-box",
    // display: "-ms-flexbox",
    display: "flex",
    alignItems: "center",
    // -webkit-box-orient: 'vertical',
    // -webkit-box-direction: 'normal',
    // -ms-flex-direction: 'column',
    flexDirection: "column",
    marginTop: "24px",
    minWidth: "264px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: 30
  },
  header: {
    textAlign: "center",
    margin: 20
  },
  headerTitle: {
    color: "#999",
    fontSize: '1.3em',
    fontFamily: "Roboto, sans-serif",
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
    fontSize: 18
  }
};

const Card = props => {
  const { title, image, animate, pad, buttonTitle, width } = props;
  return (
    <div
      style={Object.assign({}, styles.container, animate, {
        margin: `20px ${pad + 10}px`
      })}
    >
      <Spring from={{transform: 'translate3d(-5px, 0px, 0px)'}} to={{transform: 'translate3d(0px, 0px, 0px)'}}>
        {animate => (
          <h3 style={Object.assign({}, styles.cardTitle, animate)}>{title}</h3>
        )}
      </Spring>

      <hr style={styles.hr} />
      <img src={image} alt="" width={"275"} />
      <button style={styles.btn}>{buttonTitle}</button>
    </div>
  );
};

const Trailer = props => {
  const { items, pad, headerTitle, buttonTitle } = props;
  return (
    <>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>{headerTitle}</h1>
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
            image={item.image}
            buttonTitle={buttonTitle}
          />
        )}
      </Trail>
    </>
  );
};
export default Trailer;
