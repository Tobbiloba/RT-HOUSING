// @ts-nocheck
import Tip from '@/components/home/Tip/Tip'
// import Articles from '../../../components/home/Articles'
// import AvailableCard from '../../../components/home/AvailableCard'
import Categories from '../../../components/home/category/Categories'
// import Discover from "../components/home/Discover";
import Estimate from '../../../components/home/estimate/Estimate'
import Facilities from '../../../components/home/facilities/Facilities'
// import FeaturedProp from '../../../components/home/FeaturedProp'
import FloorPlans from '../../../components/home/FloorPlans'
import HomePage from '../../../components/home/HomePage'

const Homescreen = () => {
  return (
    <div className="">
      <HomePage />
      <Categories />
      <Facilities />
      <FloorPlans />
      <Estimate />
      <Tip />
    </div>
  )
}

export default Homescreen
