import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <h1>React Auth Node</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li className="header__hover">
          <span>About</span>
          <div className="header__drop">
            <span>Contacts</span>
            <span>Contacts</span>
            <span>Contacts</span>
            <span>Contacts</span>
          </div>
        </li>
        <li className="header__hover">
          <span>User</span>
          <div className="header__drop">
            <span>Atul Dubey</span>
            <span>Profile</span>
            <span onClick={onLogout}>Logout</span>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
