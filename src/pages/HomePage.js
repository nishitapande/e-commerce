import React from "react";
import { useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import FilterProductSection from "../components/FilterProductSection";

const HomePage = () => {
  const loggedIn = useSelector((state) => state.user?.token);

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <HeroSection />
      <FilterProductSection />
      {/* Token: {loggedIn} */}
    </div>
  );
};

export default HomePage;
