import React from 'react'
import Layout from "../components/Layout";
import Trailer from "../components/trailer";

const products = [
  { id: 0, title: "Berkey" },
  { id: 1, title: "Kangen Water" },
  { id: 2, title: "Ion Faucet" }
];

const Products = () => (
  <Layout title="Products">
    <Trailer items={products} />
  </Layout>
);
export default Products;