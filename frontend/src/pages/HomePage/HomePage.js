import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./HomePage.css";
const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login?redirect=/");
    }
  }, [navigate, isAuthenticated]);
  return (
    <div className="home__page">
      <Header />
      <div className="home"></div>
    </div>
  );
};

export default HomePage;
