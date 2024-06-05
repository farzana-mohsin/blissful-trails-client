import MyProfile from "../Pages/Dashboard/TourGuide/MyProfile/MyProfile";
// import MyBookings from "../Pages/Dashboard/Tourist/MyBookings/MyBookings";
import Wishlist from "../Pages/Dashboard/Tourist/Wishlist/Wishlist";

const Dashboard = () => {
  return (
    <div>
      <h2>this is dashboard</h2>
      <Wishlist></Wishlist>
      {/* <MyBookings></MyBookings> */}
      <MyProfile></MyProfile>
    </div>
  );
};

export default Dashboard;
