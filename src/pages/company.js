import React from "react";
import Layout from "../components/layout";
import AboutList from "../components/about-list";
import TeamFilter from "../assets/team-filter.svg";
import Blonde from '../assets/blonde.svg'
import Hipster from '../assets/hipster.svg'
const people = [
  {
    id: 0,
    title: "Our Vision of the Future",
    author: "Kyle Lewis",
    jobTitle: "General Partner",
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
    intro: "Advanced Oxidation Process. The invention of the “well” was a revolutionary breakthrough that has been frequently overlooked. This cradle of freshwater was the key to the growth and development of inland communities dating back nearly 10,000 years, that’s 3,000 years before the wheel was even imagined. The well is the first of its kind innovation, which spurred the advancement of a long list of water technologies. Next step has been the creation of (sophisticated) pipeline networks and treatment plants to provide us with this elixir of life, and human beings grew accustomed to an elusive abundance of water, of clean and safe drinking water. But with the passage of time, the already established water purification infrastructure have demonstrated lack of efficiency towards environmental friendliness and in decontaminating emerging water pollutants. The increasing accumulation of emerging pollutants in ground water bodies is a risk to our sustenance and necessitates advancements in water purification technologies.",
    description: "" 
  }
];

const Company = props => {
  const { pad } = props;
  return (
    <Layout title="Company">
      <AboutList
        items={people}
        headerTitle={`Meet our Team`}
        pad={pad}
        icon={TeamFilter}
      />
    </Layout>
  );
};
export default Company;
