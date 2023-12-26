import AvailableCard from "../components/AvailableCard";
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
   </div>
  );
};

export default Homescreen;
