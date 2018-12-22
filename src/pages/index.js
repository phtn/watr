import React from 'react'
import Layout from '../components/layout';
import Filter from '../../static/filter.svg'
import Tilt from 'react-vanilla-tilt'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400
  }
}
const Landing = () => {
  return (
    <Tilt style={styles.container}><img src={Filter} alt='' height={200}/></Tilt>
  )
}
export default props => {
  return (
    <Layout>
      <Landing/>
    </Layout>
  )
}