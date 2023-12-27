import Articles from "../components/Articles";
import AvailableCard from "../components/AvailableCard";
import Categories from "../components/Categories";
// import Discover from "../components/Discover";
import Estimate from "../components/Estimate";
import Facilities from "../components/Facilities";
import FeaturedProp from "../components/FeaturedProp";
import FloorPlans from "../components/FloorPlans";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

 const Homescreen = () => {

  return (
   <div className="">
    <HomePage />
    <AvailableCard />
    <Facilities />
    <FloorPlans />
    <Estimate />
    <Categories />
    <FeaturedProp />
    <Articles />
    <Footer />
   </div>
  );
};

export default Homescreen;
