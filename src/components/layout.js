import React, { useState, useEffect, Children, cloneElement } from 'react'
import Navbar from './navbar';
const styles = {
  container: {
    margin: 0
  }
}

const Layout = ({children}) => {

  const getInitialPad = () => {
    if (window.innerWidth > 650){
      return 100
    } else {
      return 10
    }
  }
  const getInitialBrand = () => {
    if (window.innerWidth > 650){
      return 'Watr'
    } else {
      return ''
    }
  }
  const [width, setWidth] = useState(window.innerWidth)
  const [navPad, setNavPad] = useState(getInitialPad())
  const [brand, setBrand] = useState(getInitialBrand)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)

    if (width > 650){
      handleNavPad(100)
      handleShowBrand('Watr')
    } else {
      handleNavPad(10)
      handleShowBrand('')
    }

    return () => window.removeEventListener('resize', handleWidthResize)
  }, [width, navPad, brand])

  const childrenWithProps = Children.map(children, child => cloneElement(child, {pad: navPad}))

  return (
    <div style={styles.container}>
      
      <Navbar pad={navPad} brand={brand}/>
      
      {childrenWithProps}

      <footer>
        {''}
      </footer>

    </div>
    
  )
}
export default Layout
  
