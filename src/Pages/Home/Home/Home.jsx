import TourismAndTravelTabs from "../TourismAndTravelTabs/TourismAndTravelTabs";
import TourTypeSection from "./TourTypeSection/TourTypeSection";
import TouristStorySection from "./TouristStorySection/TouristStorySection";

const Home = () => {
  return (
    <div>
      <h2>this is home</h2>
      <TourismAndTravelTabs></TourismAndTravelTabs>
      <TourTypeSection></TourTypeSection>
      <TouristStorySection></TouristStorySection>
    </div>
  );
};

export default Home;
