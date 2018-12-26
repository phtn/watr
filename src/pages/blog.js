import React from 'react'
import Layout from "../components/layout";
// import BlogList from "../components/blog-list";
import BlogList from '../components/blog-list'
import Pitcher from '../assets/filter.svg'
const blogs = [
  { id: 0, title: "Alkaline" },
];

const Blog = props => {
  const { pad } = props

  return(
    <Layout title="Blog">
      <BlogList items={blogs} headerTitle={`Blogs`} buttonTitle={`Read More`} pad={pad} icon={Pitcher} />
      {/* <BlogList headerTitle={`Blogs`} buttonTitle={`Read More`} pad={pad}/> */}
      {/* test */}
    </Layout>
  )
};
export default Blog;