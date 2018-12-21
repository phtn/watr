import React from 'react'
import { Trail } from "react-spring";

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
    // -webkit-box-orient: 'vertical',
    // -webkit-box-direction: 'normal',
    // -ms-flex-direction: 'column',
    flexDirection: "column",
    marginTop: "24px",
    minWidth: "264px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  cardTitle: {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 20,
    lineHeight: "24px"
  }
};

const Card = props => {
  const { title, animate, pad } = props;
  return (
    <div
      style={Object.assign({}, styles.container, animate, {
        margin: `20px ${pad}px`
      })}
    >
      <h3 style={styles.cardTitle}>{title}</h3>
    </div>
  );
}

const Trailer = props => {
  const { items, pad } = props;
  return (
    <Trail
      items={items}
      keys={item => item.id}
      from={{ opacity: 0, transform: "translate3d(0,5px,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
    >
      {item => animate => (
        <Card title={item.title} animate={animate} pad={pad}>
        </Card>
      )}
    </Trail>
  );
}
export default Trailer