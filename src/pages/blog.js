import React from 'react'
import Layout from "../components/layout";
// import BlogList from "../components/blog-list";
import BlogList from '../components/blog-list'

const blogs = [
  { id: 0, title: "Alkaline" },
  { id: 1, title: "Minerals" },
  { id: 2, title: "Alkaline" },
  { id: 3, title: "Minerals" },
  { id: 4, title: "Alkaline" },
  { id: 5, title: "Minerals" }
];

const Blog = props => {
  const { pad } = props

  return(
    <Layout title="Blog">
      <BlogList items={blogs} headerTitle={`Blogs`} buttonTitle={`Read More`} pad={pad}/>
      {/* <BlogList headerTitle={`Blogs`} buttonTitle={`Read More`} pad={pad}/> */}
      {/* test */}
    </Layout>
  )
};
export default Blog;