// import { useParams } from "react-router-dom";
// import UsePackages from "../../../../Hooks/UsePackages";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";

// import { useState } from "react";
// import { FaUmbrellaBeach } from "react-icons/fa";
// import TourTypeCategories from "./TourTypeCategories";

const TourTypeSection = () => {
  return (
    <div className='py-10 my-10'>
      <SectionTitle
        heading='Choose Tour'
        subHeading='Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.'
      ></SectionTitle>
      <div className="bg-[url('https://i.ibb.co/ZMS3P1w/tropic-leaf-background-jungle-leaves-dark-plants-tropics-wet-greens-wallpaper-169428834.webp')] text-white py-16 bg-cover bg-no-repeat my-12">
        <div className=' text-white p-8 flex flex-col md:flex-row items-center justify-evenly mt-5 space-y-10 md:space-y-0'>
          <Link to='/packages/seaside'>
            <div className='flex flex-col items-center space-y-5'>
              <span>
                <img
                  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-5-hover.png'
                  alt=''
                />
              </span>
              <button>Seaside</button>
            </div>
          </Link>
          <Link to='/packages/hiking'>
            <div className='flex flex-col items-center space-y-5'>
              <span>
                <img
                  className='focus:ring focus:ring-violet-300'
                  src='https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-3-hover.png'
                  alt=''
                />
              </span>
              <button>Hiking</button>
            </div>
          </Link>
          <Link to='/packages/wildlife'>
            <div className='flex flex-col items-center space-y-5'>
              <span>
                <img
                  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-4-hover.png'
                  alt=''
                />
              </span>
              <button>Wildlife</button>
            </div>
          </Link>
          <Link to='/packages/cruises'>
            <div className='flex flex-col items-center space-y-5'>
              <span>
                <img
                  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-2-hover.png'
                  alt=''
                />
              </span>
              <button>Cruises</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourTypeSection;
