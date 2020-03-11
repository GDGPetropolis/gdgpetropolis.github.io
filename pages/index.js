import React from "react";
import { MainMenu } from "../components/MainMenus";
import MainFooter from "../components/MainFooter";
import { MainSection } from "../components/Sections"
import EventMeetUp from "../components/EventMeetUp";

export default () => {
  return (
    <>
      <MainSection />
      <MainMenu />
      <EventMeetUp />
      <MainFooter />
    </>
  );
};
