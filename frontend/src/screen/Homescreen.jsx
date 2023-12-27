import AvailableCard from "../components/AvailableCard";
import Categories from "../components/Categories";
// import Discover from "../components/Discover";
import Estimate from "../components/Estimate";
import Facilities from "../components/Facilities";
import FeaturedProp from "../components/FeaturedProp";
import FloorPlans from "../components/FloorPlans";
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
   </div>
  );
};

export default Homescreen;
