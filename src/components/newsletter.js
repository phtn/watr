import React, { useState } from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit',
  },
  input: {
    fontFamily: 'Quicksand, sans-serif',
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
    position: "relative"
  },
}
export default props => {
  const [isSubscribed, setSubscribe] = useState('Join Our Newsletter')
  const [btnLabel, setBtnLabel] = useState('Submit')
  const handleSubscribe = () => setSubscribe('Thanks!')
  const handleBtnLabel = () => {
    setBtnLabel('Subscribed.')
    handleSubscribe()  
  }
  return (
    <div style={styles.container}>
      <input style={styles.input} placeholder={isSubscribed}/>
      <button style={styles.btn} onClick={handleBtnLabel}>{btnLabel}</button>
    </div>
  )
}