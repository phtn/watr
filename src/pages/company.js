import React from "react";
import Layout from "../components/layout";
import AboutList from "../components/about-list";
import TeamFilter from "../assets/team-filter.svg";
import Blonde from '../assets/blonde.svg'
import Hipster from '../assets/hipster.svg'
import Helmet from 'react-helmet'

const people = [
  {
    id: 0,
    title: "Our Vision of the Future",
    author: "Kyle Lewis",
    jobTitle: "Founding Father",
    avatar: Blonde,
    intro: "While the future is difficult to predict, available freshwater resources will certainly decrease in the coming years due to the increasing demand of a growing world population. Many areas of the world that are already experiencing a shortage of water resources will see their water issues worsen, causing hardships for millions. Here are 18 projections that attempt to predict the future of the world’s water supply.. ",
    description: "" 
  },
  {
    id: 2,
    title: "The Future of Water Treatment",
    author: "Will Medina",
    jobTitle: "CTO",
    avatar: Hipster,
    intro: "Understanding the value of having clean water changed my life forever. Letting everybody harvest the benefits of quality water is always been our motivation. ",
    description: "" 
  }
];

const Company = props => {
  const { pad } = props;
  return (
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
    </Helmet>
    <Layout title="Company">
      <AboutList
        items={people}
        headerTitle={`Meet our Team`}
        pad={pad}
        icon={TeamFilter}
      />
    </Layout>
    </>
  );
};
export default Company;
