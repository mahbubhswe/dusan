import React from "react";
import Slideshow from "./components/slideshow";
import AboutUs from "./components/aboutUs";
import OurMission from "./components/ourMission";
import Footer from "./components/footer";
import LatestUpdate from "./components/latestUpdate";
import OurCommunity from "./components/ourCommunity";

export default function Index() {
  return (
    <React.Fragment>
      <Slideshow />
      <LatestUpdate />
      <AboutUs />
      <OurMission />
      <OurCommunity />
      <Footer />
    </React.Fragment>
  );
}
