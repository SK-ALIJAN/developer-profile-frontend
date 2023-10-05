import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
 let isAuth = useSelector((store) => store.authReducer.isAuth);

  if (isAuth) {
    return children;
  }

  return <Navigate to="/Authentication" />;
};

export default PrivateRoute;
