import Tip from "@/components/home/Tip";
import Articles from "../components/home/Articles";
import AvailableCard from "../components/home/AvailableCard";
import Categories from "../components/home/Categories";
// import Discover from "../components/home/Discover";
import Estimate from "../components/home/Estimate";
import Facilities from "../components/home/Facilities";
import FeaturedProp from "../components/home/FeaturedProp";
import FloorPlans from "../components/home/FloorPlans";
import Footer from "../components/home/Footer";
import HomePage from "../components/home/HomePage";

 const Homescreen = () => {

  return (
   <div className="">
    <HomePage />
    <Categories />
    <Facilities />
    <FloorPlans />
    <Estimate />
    <Tip />
    {/* <FeaturedProp />
    <Articles /> */}
    <Footer />
   </div>
  );
};

export default Homescreen;
