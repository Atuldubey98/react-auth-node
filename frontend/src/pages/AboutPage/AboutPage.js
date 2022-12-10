import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./AboutPage.css";
const AboutPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login?redirect=" + pathname);
    }
  }, [navigate, isAuthenticated, pathname]);
  return (
    <div className="about">
      <Header />
    </div>
  );
};

export default AboutPage;
