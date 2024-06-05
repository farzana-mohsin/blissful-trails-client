// import { useParams } from "react-router-dom";
// import UsePackages from "../../../../Hooks/UsePackages";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";

// import { useState } from "react";
// import { FaUmbrellaBeach } from "react-icons/fa";
// import TourTypeCategories from "./TourTypeCategories";

const TourTypeSection = () => {
  // const categories = ["relaxed", "adventure", "seaside", "cruises"];
  // const { category } = useParams(); // to know in which category you're currently in
  // const initialIndex = categories.indexOf(category);
  // const [tabIndex, setTabIndex] = useState(initialIndex);
  // const [packages] = UsePackages();

  // const relaxed = packages.filter((pack) => pack.tourType === "relaxed");
  // const adventure = packages.filter((pack) => pack.tourType === "adventure");
  // const seaside = packages.filter((pack) => pack.tourType === "seaside");
  // const cruises = packages.filter((pack) => pack.tourType === "cruises");

  return (
    <div>
      <SectionTitle
        heading='Choose Tour'
        subHeading='Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.'
      ></SectionTitle>

      <Link to='/packages/seaside'>
        <button>Seaside</button>
      </Link>
      <Link to='/packages/hiking'>
        <button>Hiking</button>
      </Link>
      <Link to='/packages/wildlife'>
        <button>Wildlife</button>
      </Link>
      <Link to='/packages/cruises'>
        <button>Cruises</button>
      </Link>
    </div>
  );
};

export default TourTypeSection;
