import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UsePackages from "../../../Hooks/UsePackages";
import PackagesCards from "../../../Components/PackagesCards/PackagesCards";
import videoUrl from "../../../../public/mixkit-palm-tree-on-a-sunny-day-4645-hd-ready.mp4";

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
            autoPlay='true'
          >
            {/* <source type='video/mp4' /> */}
          </video>
        </TabPanel>
        <TabPanel>
          {packages.slice(0, 3).map((pack, index) => (
            <PackagesCards
              key={index}
              pack={pack}
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
