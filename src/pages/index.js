import React, { useState, useEffect } from 'react'
import Layout from '../components/layout';
import ClearWater from '../assets/clear-water.mp4';
// import k8 from '../assets/k8-2.jpg';
// import lake from '../assets/lake-2.jpg'
// import Tilt from 'react-vanilla-tilt';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tilt: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    // padding: '-20px'
  },
  hero: {
    position: 'absolute',
    top: 100,
    left: 220,
    zIndex: 1,
    fontSize: 20,
    fontFamily: 'Quicksand, sans-serif'
  },
  heroSubOne: {
    position: 'absolute',
    top: 120,
    left: 220,
    zIndex: 1,
    fontSize: 20,
    fontFamily: 'Quicksand, sans-serif'
  },
  heroSubTwo: {
    position: 'absolute',
    top: 140,
    left: 220,
    zIndex: 1,
    fontSize: 20,
    fontFamily: 'Quicksand, sans-serif'
  },
  bridge: {
    height: 100,
    backgroundColor: "#666"
  }
}
const Landing = props => {
  const [ height, setHeight ] = useState('140vh')
  const { pad } = props
  const handleHeight = (h) => setHeight(h)
  useEffect(()=> {
    if (pad === 10){
      handleHeight('50vh')
      // console.log(pad)
    } else {
      handleHeight('140vh')
    }
  }, [height])
  
  return (
    <div style={Object.assign({}, styles.tilt, {height})}>

      <video id='landingVideo' muted autoPlay loop height='100%'>
        <source src={ClearWater} />
      </video>
      
    </div>
  )
}

const Bridge = props => {
  // const v = document.getElementById('landingVideo')
  // const suspended = () => console.log('suspended.')
  // v.addEventListener('loadeddata', suspended)

  return(
    <div style={styles.bridge}></div>
  )
}
export default () => {
  return (
    <Layout title={`Watr`}>
      <Landing/>
      <Bridge/>
    </Layout>
  )
}