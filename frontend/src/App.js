import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
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
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
