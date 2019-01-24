import React from 'react'
import Helmet from 'react-helmet'
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


const Products = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
      </Helmet>

      <Layout title={`Products`}>
        <ProductList items={products} headerTitle={`All Products`} buttonTitle={`View All Products`} icon={Filter}/>
      </Layout>
    </>
  )
}
export default Products;