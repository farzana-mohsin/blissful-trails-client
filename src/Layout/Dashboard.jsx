import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
// import MyProfile from "../Pages/Dashboard/TourGuide/MyProfile/MyProfile";
import RequestToAdmin from "../Pages/Dashboard/Tourist/RequestToAdmin/RequestToAdmin";
// import MyBookings from "../Pages/Dashboard/Tourist/MyBookings/MyBookings";
// import Wishlist from "../Pages/Dashboard/Tourist/Wishlist/Wishlist";

const Dashboard = () => {
  return (
    <div>
      <h2>this is dashboard</h2>
      {/* <Wishlist></Wishlist> */}
      <RequestToAdmin></RequestToAdmin>
      {/* <MyBookings></MyBookings> */}
      {/* <MyProfile></MyProfile> */}

      <ManageUsers></ManageUsers>
    </div>
  );
};

export default Dashboard;
