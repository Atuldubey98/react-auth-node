import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions";

import "./AuthenticationPage.css";
const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const redirect = window.location.search ? window.location.search.split("=")[1] : "/profile";
  console.log(window.location);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, error, navigate, redirect]);
  return (
    <div className="auth__page">
      {loading ? (
        <div>Loading </div>
      ) : (
        <div className="auth__login">
          <form onSubmit={onLoginSubmit} className="auth__form">
            <input onChange={onEmailChange} name="email" value={email} />
            <input
              onChange={onPasswordChange}
              type="password"
              name="password"
              value={password}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthenticationPage;
