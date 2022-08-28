import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


function PrivateRoute({ children }) {
  
  const { state } = useContext(AppContext);
  console.log("Proutes", state);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
