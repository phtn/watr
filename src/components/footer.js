import React from 'react'
import { Link } from 'gatsby'
const styles = {
  container: {
    backgroundColor: '#222',
    height: 200,
    color: '#777',
    textAlign: 'center'
  },
  label: {
    fontFamily: 'Quicksand, sans-serif'
  },
  logo: {
    width: 30,
    padding: 20
  },
  brand: {
    color: "#eee",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.4em",
    fontWeight: '700i',
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    width: 300
  },
}
export default props => {
  const { logo, pad, brand } = props
  return (
    <div style={Object.assign({}, styles.container, {padding: `20px ${pad}px`})}>
      <div>
        <Link to="/">
          <img src={logo} style={styles.logo} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/" style={styles.brand}>
          {brand}
        </Link>
      </div>
      <p style={styles.label}>© Copyright 2018 {brand} Filtration Systems. All Rights Reserved.</p>
    </div>
  )
}