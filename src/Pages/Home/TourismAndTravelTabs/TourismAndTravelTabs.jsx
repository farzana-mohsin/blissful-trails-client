import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UsePackages from "../../../Hooks/UsePackages";
import PackagesCards from "../../../Components/PackagesCards/PackagesCards";
import videoUrl from "../../../../public/4133023-uhd_3840_2160_30fps_compressed.mp4";
import GuideProfilePage from "../../GuideProfilePage/GuideProfilePage";

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
          <div className='flex flex-col lg:flex-row gap-10 mx-auto container items-center justify-evenly'>
            {packages.slice(0, 3).map((item, index) => (
              <PackagesCards
                key={index}
                item={item}
              ></PackagesCards>
            ))}
          </div>
          <button className='text-center mx-auto flex btn bg bg-[#ffcc05]'>
            See All Packages
          </button>
        </TabPanel>
        <TabPanel>
          <GuideProfilePage></GuideProfilePage>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismAndTravelTabs;
