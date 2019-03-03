import React from "react";
import Layout from "../components/layout";
import ProductsList from "../components/blog-list.rc";
import Pitcher from "../assets/filter.svg";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

const Products = ({ data, pad }) => {
  const { allMarkdownRemark: post } = data;
  
  
  const arr = [...post.edges]
  const newArr = arr.filter(item => item.node.frontmatter.tag === 'PRODUCT')
  
  // console.log("newArr", newArr[0].node.frontmatter.id)
  // console.log("oldArr", post.edges)

  
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>
      <Layout title="Products">
        <ProductsList
          items={newArr}
          itemCount={post.totalCount}
          headerTitle={`Products`}
          title={""}
          buttonTitle={`Read More`}
          pad={pad}
          icon={Pitcher}
        />
      </Layout>
    </>
  );
};
export default Products;

// NOT IN ORDER 
export const getProducts = graphql`
  query ProductsList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___id]}
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            createdAt
            description
            readTime
            updatedAt
            source
            id
            tag
          }
        }
      }
    }
  }
`;


