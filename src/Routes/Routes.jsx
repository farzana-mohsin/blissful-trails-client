import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import TourTypeCategories from "../Pages/Home/Home/TourTypeSection/TourTypeCategories";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import MyBookings from "../Pages/Dashboard/Tourist/MyBookings/MyBookings";
import Wishlist from "../Pages/Dashboard/Tourist/Wishlist/Wishlist";
import MyProfile from "../Pages/Dashboard/TourGuide/MyProfile/MyProfile";

import RequestToAdmin from "../Pages/Dashboard/Tourist/RequestToAdmin/RequestToAdmin";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage/AddPackage";
import TourGuideTours from "../Pages/Dashboard/TourGuide/TourGuideTours/TourGuideTours";
import TouristProfile from "../Pages/Dashboard/Tourist/TouristProfile/TouristProfile";
import GuideProfilePage from "../Pages/GuideProfilePage/GuideProfilePage";
import GuideProfileDetails from "../Components/GuideProfileDetails/GuideProfileDetails";
import Payment from "../Pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // normal user routes
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages/:tourType",
        element: <TourTypeCategories></TourTypeCategories>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/packages/tour-type/${
              params.tourType
            }`
          ),
      },
      {
        path: "/packages-details/:id",
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/packages/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/guides",
        element: <GuideProfilePage></GuideProfilePage>,
      },
      {
        path: "/guides/:id",
        element: <GuideProfileDetails></GuideProfileDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/guides/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // tourist routes
      {
        path: "tourist-profile",
        element: (
          <PrivateRoutes>
            <TouristProfile></TouristProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-wishlist",
        element: (
          <PrivateRoutes>
            <Wishlist></Wishlist>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings></MyBookings>
          </PrivateRoutes>
        ),
      },
      {
        path: "request-to-admin",
        element: (
          <PrivateRoutes>
            <RequestToAdmin></RequestToAdmin>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // tour guide routes
      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "guide-tours",
        element: (
          <PrivateRoutes>
            <TourGuideTours></TourGuideTours>
          </PrivateRoutes>
        ),
      },

      // admin routes
      {
        path: "admin-profile",
        element: (
          <PrivateRoutes>
            <AdminProfile></AdminProfile>
          </PrivateRoutes>
        ),
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/pending-requests`),
      },
      {
        path: "admin-package",
        element: (
          <PrivateRoutes>
            <AddPackage></AddPackage>
          </PrivateRoutes>
        ),
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/pending-requests`),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoutes>
            <ManageUsers></ManageUsers>
          </PrivateRoutes>
        ),
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/pending-requests`),
      },
    ],
  },
]);
export default router;
