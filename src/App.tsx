import React from "react";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Package from "./pages/Package";
import Banner from "./components/Banner";
import Destinations from "./pages/Destinations";

const App = () => {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <Package />
      <Banner />
      <Destinations />
    </>
  );
};

export default App as React.ComponentType;
