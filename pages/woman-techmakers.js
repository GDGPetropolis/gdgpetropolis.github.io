import React from "react";
import HeroWrapper from "../components/HeroWrapper";
import { MainMenuEvent } from "../components/MainMenus";
import EventDescription from "../components/EventDescription";
import TheLocation from "../components/TheLocation";
import Speakers from "../components/Speakers";
import MainFooter from "../components/MainFooter";

export default (props) => {
  return (
    <>
      <MainMenuEvent logoName="/img/logo-wtm.png" />
      <HeroWrapper />
      <EventDescription />
      <TheLocation />
      <Speakers />
      <MainFooter />
    </>
  );
};
