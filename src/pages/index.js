import React from 'react'
import Layout from '../components/layout';
import water from '../assets/water.png'
import Tilt from 'react-vanilla-tilt'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${water})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}
const Landing = () => {
  // console.log(Filter)
  return (
    <Tilt style={styles.container}></Tilt>
  )
}
export default props => {
  return (
    <Layout title={`Watr`}>
      <Landing/>
    </Layout>
  )
}