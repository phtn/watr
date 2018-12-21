import React from 'react'
import Layout from "../components/Layout";
import Trailer from "../components/trailer";

const people = [
  { id: 0, title: "CEO" },
  { id: 1, title: "COO" },
  { id: 2, title: "CFO" },
  { id: 3, title: "CTO" },
  { id: 4, title: "HR" },
  { id: 5, title: "Legal" }
];

const Company = () => (
  <Layout title="Company">
    <Trailer items={people} />
  </Layout>
);
export default Company;