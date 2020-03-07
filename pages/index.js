import React from "react";
import { MainMenu } from "../components/MainMenus";
import MainFooter from "../components/MainFooter";
import EventMeetUp from "../components/EventMeetUp";

export default () => {
  return (
    <>
      <MainMenu />
      <EventMeetUp />
      <MainFooter />
    </>
  );
};
