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
  { id: 0, title: "Big Berkey Water Filters", logo: berkeyLogo, image: royalBerkey, description: "Perfect for college students & renters.", link: "https://www.bigberkeywaterfilters.com/berkey-water-filters.html" },
  { id: 1, title: "Enagic Kangen Water", logo: enagicLogo, image: k8, description: "Upgrade your Home.", link: "https://www.bigberkeywaterfilters.com/" },
  { id: 2, title: "Ion Faucet", logo: Filter, image: royalBerkey, description: "Simple Filtration System that works!", link: "https://www.bigberkeywaterfilters.com/" },
  { id: 3, title: "RainSoft", logo: Filter, image: k8, description: "Ultimate Upgrade.", link: "https://www.bigberkeywaterfilters.com/" },
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

console.log(typeof window.location.pathname)

const Products = () => {
  return (
    <Layout title={`Products`}>
      <ProductList items={products} headerTitle={`All Products`} buttonTitle={`View All Products`} icon={Filter}/>
    </Layout>
  )
}
export default Products;