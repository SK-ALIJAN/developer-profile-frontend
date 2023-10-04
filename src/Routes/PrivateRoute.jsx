import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  console.log(isAuth);

  if (isAuth) {
    return children;
  }

  return <Navigate to="/Authentication" />;
};

export default PrivateRoute;
