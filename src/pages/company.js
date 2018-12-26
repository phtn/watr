import React from 'react'
import Layout from "../components/layout";
import Trailer from "../components/blog-list";
import TeamFilter from '../assets/team-filter.svg'
const people = [
  { id: 0, title: "Our Vision of the Future" },
];

const Company = props => {
  const { pad } = props
  return(
    <Layout title="Company">
      <Trailer items={people} headerTitle={`Meet our Team`} buttonTitle={`Like`} pad={pad} icon={TeamFilter}/>
    </Layout>
  )
};
export default Company;