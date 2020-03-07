import React from "react";
import styled from "styled-components";

const MainMenuContainer = styled.div`
  width: 100%;
  padding: 30px 8%;
  position: sticky;
  left: 0;
  top: 0;
  background-color: white;
  -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.4);
  z-index:22;
  img{
    width: 200px;
  }
  @media (max-width: 700px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    img{
      width: 60vw;
    }
  }
`;
const MainMenuContainer2 = styled.div`
  width: 100%;
  padding: 30px 8%;
  position: absolute;
  left: 0;
  top: 0;
  img{
    width: 200px;
  }
  @media (max-width: 700px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    img{
      width: 60vw;
    }
  }
`;
export function MainMenu(props) {
  return (
    <MainMenuContainer>
      <img src={props.logoName ? props.logoName : '/img/gdg_petropolis_logo.svg'} />
    </MainMenuContainer>
  );
}
export function MainMenuEvent(props) {
  return (
    <MainMenuContainer2>
      <img src={props.logoName ? props.logoName : '/img/gdg_petropolis_logo.svg'} />
    </MainMenuContainer2>
  );
}
