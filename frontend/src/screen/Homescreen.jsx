import AvailableCard from "../components/AvailableCard";
import Estimate from "../components/Estimate";
import Facilities from "../components/Facilities";
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
   </div>
  );
};

export default Homescreen;
