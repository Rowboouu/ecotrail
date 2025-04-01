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
import Credits from "./components/Credits";

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
      <Credits />
    </>
  );
};

export default App as React.ComponentType;
