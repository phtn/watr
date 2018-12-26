import React from 'react'
// import { graphql } from 'gatsby'
import Layout from "../components/layout";
import ProductList from "../components/product-list";
import berkeyLogo from '../assets/bbwf-logo.png'
import enagicLogo from '../assets/enagic-logo.svg'
import royalBerkey from '../assets/royal-berkey.jpeg'
import k8 from '../assets/k8-2.jpg'
import Filter from '../assets/filter2.svg'

const products = [
  { id: 0, title: "Big Berkey Water Filters", logo: berkeyLogo, image: royalBerkey },
  { id: 1, title: "Enagic Kangen Water", logo: enagicLogo, image: k8 },
  { id: 2, title: "Ion Faucet", logo: Filter, image: royalBerkey }
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
      <ProductList items={products} headerTitle={`All Products`} buttonTitle={`Show More`} icon={Filter}/>
    </Layout>
  )
}
export default Products;