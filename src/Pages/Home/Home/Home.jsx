import TourismAndTravelTabs from "../TourismAndTravelTabs/TourismAndTravelTabs";
import Banner from "./Banner/Banner";
import TourTypeSection from "./TourTypeSection/TourTypeSection";
import TouristStorySection from "./TouristStorySection/TouristStorySection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourismAndTravelTabs></TourismAndTravelTabs>
      <TourTypeSection></TourTypeSection>
      <TouristStorySection></TouristStorySection>
    </div>
  );
};

export default Home;
