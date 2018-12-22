import React from 'react'
import Layout from "../components/layout";
import Trailer from "../components/trailer";

const blogs = [
  { id: 0, title: "Alkaline" },
  { id: 1, title: "Minerals" },
  { id: 2, title: "Alkaline" },
  { id: 3, title: "Minerals" },
  { id: 4, title: "Alkaline" },
  { id: 5, title: "Minerals" }
];

const Blog = () => (
  <Layout title="Blog">
    <Trailer items={blogs} headerTitle={`Blogs`} buttonTitle={`Read More`}/>
  </Layout>
);
export default Blog;