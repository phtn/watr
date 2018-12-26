import React, { useState, useEffect, Children, cloneElement } from 'react'
import Navbar from './navbar';
import { Helmet } from 'react-helmet'

import '../index.css'
const styles = {
  container: {
    margin: 0
  }
}

const Layout = ({children, title}) => {

  const getInitialPad = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 650){
      return 100
    } else {
      return 10
    }
  }
  const getInitialBrand = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 650){
      return '····'
    } else {
      return ''
    }
  }
  const [width, setWidth] = useState(typeof window !== 'undefined' && window.innerWidth)
  const [navPad, setNavPad] = useState(getInitialPad())
  const [brand, setBrand] = useState(getInitialBrand)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)

    document.title = title

    if (width > 650){
      handleNavPad(100)
      handleShowBrand('····')
    } else {
      handleNavPad(10)
      handleShowBrand('')
    }

    return () => (typeof window !== 'undefined' && window.removeEventListener('resize', handleWidthResize))
  }, [width, navPad, brand])

  const childrenWithProps = Children.map(children, child => cloneElement(child, {pad: navPad}))

  return (
    <div style={styles.container}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
      </Helmet>
      
      <Navbar pad={navPad} brand={brand}/>
      
      {childrenWithProps}

      <footer>
        {''}
      </footer>

    </div>
    
  )
}
export default Layout
  
