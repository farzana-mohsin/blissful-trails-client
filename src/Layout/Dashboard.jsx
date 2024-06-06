import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaPlane, FaThList, FaUsers } from "react-icons/fa";
// import MyBookings from "../Pages/Dashboard/Tourist/MyBookings/MyBookings";
// import Wishlist from "../Pages/Dashboard/Tourist/Wishlist/Wishlist";

const Dashboard = () => {
  const isAdmin = false;
  const isTourGuide = false;

  const adminSections = (
    <div>
      <li className=''>
        <NavLink to='/dashboard/admin-profile'>
          <span className='flex'>
            <FaHome></FaHome>
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
          <FaHome></FaHome> Tour Guide Profile
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
    <div className='flex'>
      <li>
        <NavLink to='/dashboard/tourist-profile'>
          <FaHome></FaHome> Tourist Profile
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/my-wishlist'>
          <FaPlane></FaPlane> Tourist Wishlist
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
    <div className=' mx-auto flex'>
      <div className="className='w-72 min-h-screen bg-amber-400 mr-10 p-16 list-none ">
        {isAdmin
          ? adminSections
          : isTourGuide
          ? guideSections
          : touristSections}
      </div>
      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
