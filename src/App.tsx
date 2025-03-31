import React from "react";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Package from "./pages/Package";
import Banner from "./components/Banner";
import Destinations from "./pages/Destinations";
import Banner2 from "./components/Banner2";
import WhyChoose from "./pages/WhyChoose";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <Package />
      <Banner />
      <Destinations />
      <Banner2 />
      <WhyChoose />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App as React.ComponentType;
