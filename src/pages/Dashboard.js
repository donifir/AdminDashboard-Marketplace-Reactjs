import React from "react";
import PlaceholderComponent from "../Components/PlaceholderComponent";
import NavbarComponent from "../Components/NavbarComponent";
import SidebarComponent from "../Components/SidebarComponent";
import ContentwraperComonent from "../Components/ContentwraperComonent";
import ControlsidebarComponent from "../Components/ControlsidebarComponent";
import FooterComponent from "../Components/FooterComponent";

export default function Dashboard() {
  return (
    <div className=" dark-mode hold-transition sidebar-mini layout-footer-fixed">

    <div className="wrapper">
      <PlaceholderComponent />
      <NavbarComponent />
      <SidebarComponent />
      <ContentwraperComonent />
      <ControlsidebarComponent />
      <FooterComponent />
    </div>
    </div>
  );
}
