import React from 'react'
// import { graphql } from 'gatsby'
import Layout from "../components/layout";
import Trailer from "../components/trailer";
import berkeyLogo from '../assets/bbwf-logo.png'
import enagicLogo from '../assets/enagic-logo.svg'
import berkeyImage from '../assets/go-berkey-1.jpeg'
import k8 from '../assets/k8-2.jpg'
import Filter from '../assets/filter2.svg'

const products = [
  { id: 0, title: "Big Berkey Water Filters", logo: berkeyLogo, image: berkeyImage },
  { id: 1, title: "Enagic Kangen Water", logo: enagicLogo, image: k8 },
  { id: 2, title: "Ion Faucet", logo: Filter, image: berkeyImage }
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
      <Trailer items={products} headerTitle={`Products`} buttonTitle={`Show More`}/>
    </Layout>
  )
}
export default Products;