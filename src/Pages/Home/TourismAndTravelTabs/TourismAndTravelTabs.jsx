import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UsePackages from "../../../Hooks/UsePackages";
import PackagesCards from "../../../Components/PackagesCards/PackagesCards";

const TourismAndTravelTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const packages = UsePackages();

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
          <h2>overview</h2>
        </TabPanel>
        <TabPanel>
          {packages.map((pack, index) => (
            <PackagesCards
              key={index}
              package={pack}
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
