import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { loadUser } from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    return () => {};
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path={"/login"} element={<AuthenticationPage />} />
        <Route
          path={"/"}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/profile"}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
