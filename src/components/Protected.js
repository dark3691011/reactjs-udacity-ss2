import { useLocation, Navigate } from "react-router";
import { useSelector } from "react-redux";

function Protected({ children }) {
  // Safely access authedUser from Redux state
  const authedUser = useSelector((state) => state.authedUser);

  const location = useLocation();

  // If authedUser is not available, redirect to login page
  return !authedUser ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}

export default Protected;
