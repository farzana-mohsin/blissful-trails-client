import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import TourTypeCategories from "../Pages/Home/Home/TourTypeSection/TourTypeCategories";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
        path: "/packagesDetails/:id",
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
    ],
  },
]);
export default router;
