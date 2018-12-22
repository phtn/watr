import React, { useState, useEffect, Children, cloneElement } from 'react'
import Navbar from './navbar';
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
      return 'Watr'
    } else {
      return ''
    }
  }
  const [width, setWidth] = useState(typeof window !== 'undefined' && window.innerWidth)
  const [navPad, setNavPad] = useState(getInitialPad())
  const [brand, setBrand] = useState(getInitialBrand)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(typeof window !== 'undefined' && window.innerWidth)
    window.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)

    document.title = title

    if (width > 650){
      handleNavPad(100)
      handleShowBrand('Watr')
    } else {
      handleNavPad(10)
      handleShowBrand('')
    }

    return () => typeof window !== 'undefined' && window.removeEventListener('resize', handleWidthResize)
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
  
