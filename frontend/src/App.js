import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import { loadUser } from "./redux/actions/userActions";

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadUser())
    return () => {
    }
  }, [dispatch])
  
  return (
    <div className="app">
      <Routes>
        <Route path={"/login"} element={<AuthenticationPage/>}/>
        <Route path={"/profile"} element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
