import React, { useState, useEffect } from 'react'
import Layout from '../components/layout';
// import water from '../assets/water.png';
// import k8 from '../assets/k8-2.jpg';
import lake from '../assets/lake-2.jpg'
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
    height: '140vh',
    // padding: '-20px'
  }
}
const Landing = props => {
  const [ height, setHeight ] = useState('140vh')
  const { pad } = props
  const handleHeight = (h) => setHeight(h)
  useEffect(()=> {
    if (pad === 10){
      handleHeight('50vh')
      console.log(pad)
    } else {
      handleHeight('140vh')
    }
  }, [height])
  return (
    <div style={Object.assign({}, styles.tilt, {height})}>
      <img src={lake} alt='' height={`100%`}/>
    </div>
  )
}
export default () => {
  return (
    <Layout title={`Watr`}>
      <Landing/>
    </Layout>
  )
}