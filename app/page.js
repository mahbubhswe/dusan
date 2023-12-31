import React from "react";
import Slideshow from "./components/slideshow";
import AboutUs from "./components/aboutUs";
import OurMission from "./components/ourMission";
import Footer from "./components/footer";
import LastAnnouncement from "./components/lastAnnouncement";
import ChefMembers from "./components/chefMembers";
import OurCommunity from "./components/ourCommunity";
import Ads from "./components/ads";

export default function Index() {
  return (
    <React.Fragment>
      <Slideshow />
      <LastAnnouncement />
      <AboutUs />
      <OurMission />
      <ChefMembers />
      <OurCommunity />
      <Ads />
      <Footer />
    </React.Fragment>
  );
}
