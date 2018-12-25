import React from 'react'
// import { graphql } from 'gatsby'
import Layout from "../components/layout";
import Trailer from "../components/trailer";
import berkeyLogo from '../assets/bbwf-logo.png'
import enagicLogo from '../assets/enagic-logo.svg'
import Filter from '../assets/filter2.svg'

const products = [
  { id: 0, title: "Big Berkey Water Filters", image: berkeyLogo },
  { id: 1, title: "Enagic Kangen Water", image: enagicLogo },
  { id: 2, title: "Ion Faucet", image: Filter }
];

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
    
//   }
// `

const Products = () => {
  return (
    <Layout title={`Products`}>
      <Trailer items={products} headerTitle={` All Products `} buttonTitle={`Shop Now`}/>
    </Layout>
  )
}
export default Products;