import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UsePackages from "../../../Hooks/UsePackages";
import PackagesCards from "../../../Components/PackagesCards/PackagesCards";
import videoUrl from "../../../../public/4133023-uhd_3840_2160_30fps_compressed.mp4";

const TourismAndTravelTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [packages] = UsePackages();

  return (
    <div>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>OverView</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Our Tour Guides</Tab>
        </TabList>
        <TabPanel>
          <video
            src={videoUrl}
            width='1400'
            height='640'
            controls='controls'
            // muted
            // autoPlay
          >
            {/* <source type='video/mp4' /> */}
          </video>
        </TabPanel>
        <TabPanel>
          {packages.slice(0, 3).map((item, index) => (
            <PackagesCards
              key={index}
              item={item}
            ></PackagesCards>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>our tour guides</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismAndTravelTabs;
