import { useSelector } from "react-redux";

const { Navigate } = require("react-router-dom");

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(
        (state) => state.user
      );
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
};
export default ProtectedRoute;