import React from "react";
import HeroWrapper from "../components/HeroWrapper";
import MainMenu from "../components/MainMenu";
import EventDescription from "../components/EventDescription";
import TheLocation from "../components/TheLocation";
import Speakers from "../components/Speakers";
import MainFooter from "../components/MainFooter";

export default () => {
  return (
    <>
      <MainMenu />
      <HeroWrapper />
      <EventDescription />
      <TheLocation />
      <Speakers />
      <MainFooter />
    </>
  );
};
