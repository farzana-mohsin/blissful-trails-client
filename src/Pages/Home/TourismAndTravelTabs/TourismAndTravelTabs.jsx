import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TourismAndTravelTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

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
          <h2>our packages</h2>
        </TabPanel>
        <TabPanel>
          <h2>our tour guides</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismAndTravelTabs;
