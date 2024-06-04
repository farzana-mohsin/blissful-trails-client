import PropTypes from "prop-types";
import useAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (user) return children;
  return (
    <Navigate
      to='/login'
      state={location.pathname}
      replace='true'
    />
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoutes;
