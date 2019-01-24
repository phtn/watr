import React from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit',
  },
  input: {
    fontFamily: 'Quicksand, sans-serif',
    // height: "2rem",
    padding: 10
  },
  btn: {
    marginLeft: 10,
    padding: "0 2rem",
    height: "2.5rem",
    lineHeight: "2.5rem",
    borderRadius: "5px",
    background: "rgb(0,118,255)",
    boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
    color: "white",
    border: "none",
    fontFamily: "Roboto, sans-serif",
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
}
export default props => {
  return (
    <div style={styles.container}>
      <input style={styles.input} placeholder='Join Our Newsletter'/>
      <button style={styles.btn} >Submit</button>
    </div>
  )
}