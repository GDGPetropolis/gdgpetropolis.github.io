import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { MainNav } from "./MainNav";

const MainMenuContainer = styled.div`
  width: 100%;
  padding: 20px 8%;
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
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

/*Main Page menu */
export function MainMenu(props) {
  useEffect(()=>{
    window.document.onscroll = function() {scrollFunction()};
    let navlink = document.querySelectorAll('#mainMenu a');
    let mainMenu = document.getElementById('mainMenu');
    for(var n = 0; n < navlink.length; n++){
      navlink[n].style.color = 'white';
    }
    function scrollFunction() {
      if (document.documentElement.scrollTop > 10) {
        mainMenu.style.background = 'white'
        mainMenu.style.boxShadow = '0px 2px 2px 0px rgba(0,0,0,0.4)'
        for(var n = 0; n < navlink.length; n++){
          navlink[n].style.color = '#4c73b2';
        }
      } else if (document.documentElement.scrollTop == 0) {
        mainMenu.style.background = ''
        mainMenu.style.boxShadow = 'none'
        for(var n = 0; n < navlink.length; n++){
          navlink[n].style.color = 'white';
        }
      }
    }
  })
  return (
    <MainMenuContainer id='mainMenu'>
      <img src={props.logoName ? props.logoName : '/img/gdg_petropolis_logo.svg'} />
      <MainNav />
    </MainMenuContainer>
  );
}

/*Event Page menu */
export function MainMenuEvent(props) {
  return (
    <MainMenuContainer2>
      <img src={props.logoName ? props.logoName : '/img/gdg_petropolis_logo.svg'} />
    </MainMenuContainer2>
  );
}
