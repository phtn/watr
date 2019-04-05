import React from "react";
import Layout from "../components/layout";
import AboutList from "../components/company-list.rc";
import TeamFilter from "../assets/team-filter.svg";
// import Blonde from '../assets/blonde.svg'
// import Hipster from '../assets/hipster.svg'
import Helmet from 'react-helmet'


// const people = [
//   {
//     id: 0,
//     title: "Reclaim Your Freedom",
//     author: "Kyle Lewis",
//     jobTitle: "Chief Liberator",
//     avatar: Blonde,
//     p1: `is the creation from years of research and testing water quality for homeowners, family, and friends to help them make an educated decision on what's worthwhile to purchase for their household needs. Educating the community one at a time was fulfilling, yet too much time was invested on those who really don’t have the right knowledge or drive to stop consuming city tap water and big business bottled water.`,

//     p2: `What we have developed here was a simple online platform that produces solutions based off each individuals needs. The goal was to take countless hours of live demonstrations, peer reviewed articles, state water testing results and give you the most comprehensive analysis about the state of our water. `,
    
//     p3: `If you believe quarterly water reports that are tested from the water treatment plant are safe and under the federal guidelines, then this information is not for you. If you realize that your water flows from eroding underground pipes, that are 20 to 100 years old and miles away from your plant and that water is never tested by your municipality at your location, then our life changing solutions are just for you.  `,
    
//     description: ""
//   },
//   {
//     id: 2,
//     title: "The Future of Water Treatment",
//     author: "Will Medina",
//     jobTitle: "CTO",
//     avatar: Hipster,
//     p2: "Understanding the value of having clean water changed my life forever. Letting everybody harvest the benefits of quality water is always been our motivation. ",
//     description: "" 
//   }
// ];



const Company = ({data}) => {

  const { allMarkdownRemark: post } = data;

  const arr = [...post.edges]

  const newArr = arr.filter(item => item.node.frontmatter.tag === "COMPANY");
  // console.log("newArr", newArr)
  // console.log("oldArr", post.edges)

  

  
  return (
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
    </Helmet>
    <Layout title="Company">
      <AboutList
        items={newArr}
        itemCount={post.totalCount}
        headerTitle={`Meet our Team`}
        
        icon={TeamFilter}
      />
    </Layout>
    </>
  );
};
export default Company;

// NOT IN ORDER

export const getPeeps = graphql`
  query Peeps {
    allMarkdownRemark(
      sort: { fields: [frontmatter___id]}
      limit: 20
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            rank
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
