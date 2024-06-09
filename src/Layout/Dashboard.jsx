import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaPlane, FaThList, FaUsers, FaSearch } from "react-icons/fa";
import useAdmin from "../Hooks/UseAdmin";
import useGuide from "../Hooks/UseGuide";
import { ImProfile } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
// import MyBookings from "../Pages/Dashboard/Tourist/MyBookings/MyBookings";
// import Wishlist from "../Pages/Dashboard/Tourist/Wishlist/Wishlist";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();

  const adminSections = (
    <div>
      <li className=''>
        <NavLink to='/dashboard/admin-profile'>
          <span className='flex'>
            <ImProfile />
          </span>
          Admin Profile
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/admin-package'>
          <FaThList></FaThList> Add Package
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/manage-users'>
          <FaUsers></FaUsers> Manage Users
        </NavLink>
      </li>
    </div>
  );

  const guideSections = (
    <>
      <li>
        <NavLink to='/dashboard/my-profile'>
          <ImProfile /> Tour Guide Profile
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/guide-tours'>
          <FaPlane></FaPlane> Tour Guide Assigned Tours
        </NavLink>
      </li>
    </>
  );

  const touristSections = (
    <div className=''>
      <li>
        <NavLink to='/dashboard/tourist-profile'>
          <ImProfile /> Tourist Profile
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/my-wishlist'>
          <FaHeart /> Tourist Wishlist
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/my-bookings'>
          <FaPlane></FaPlane> Tourist Bookings
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className=' mx-auto flex'>
        <div className="className='w-56 min-h-screen bg-[#ffcc05] mr-6 pt-14 px-6 list-none">
          <ul className='menu text-lg'>
            {isAdmin
              ? adminSections
              : isGuide
              ? guideSections
              : touristSections}
            <div className='divider'></div>
            <li>
              <NavLink to='/'>
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/all-packages'>
                <FaSearch></FaSearch> Packages
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex-1 p-8'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
