import React from 'react'
import Layout from '../components/layout';
import ClearWater from '../assets/clear-water.mp4';
import Helmet from 'react-helmet'
import Newsletter from '../components/newsletter';
import Fade from 'react-reveal'
import { FixedSizeList as List } from 'react-window';





const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  landingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  
  bridge: {
    minHeight: 100,
    backgroundColor: "#fff",
    // border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
const Landing = props => {
 
  
  return (
    <div style={styles.landingContainer}>
      <video id='landingVideo' muted autoPlay loop width='100%'>
        <source src={ClearWater} />
      </video>
      
    </div>
  )
}

const Column = ({ index, style }) => (
  <div style={style}>
    <div style={{ height: 100, padding: 10, backgroundColor: '#34CDFA', textAlign: 'center'}}>Reason {index + 1}</div>
  </div>
);
 
const Reasons = props => {
  const {width} = props
  return (
    <List
      direction="horizontal"
      height={120}
      itemCount={1000}
      itemSize={300}
      width={400}
    >
      {Column}
    </List>
  )
}

const Essential = props => {
  return (
    <div style={{textAlign: 'center', padding: 15}}>
      <Fade top>
        <h1 style={{fontSize: 24, fontFamily: 'Quicksand', fontWeight: 'bolder'}}>Clean Drinking Water is essential to your Health.</h1>
        <p style={{fontFamily: 'Open Sans, sans-serif', color: '#444'}}>and here are the reasons why:</p>
      </Fade>

    </div>
  )
}

const Bridge = props => {
  // const { width } = props
  // console.log(width)
  return(
    <div style={styles.bridge}>
        {props.component}
    </div>
  )
}

export default function Index() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
      </Helmet>

      <Layout title={`William Wallace Water`}>
  
        <Landing/>
        <Bridge component={<Essential/>}/>
        <Bridge component={<Reasons/>}/>
        <Bridge component={<Newsletter/>}/>

      </Layout>
    </>
  )
}