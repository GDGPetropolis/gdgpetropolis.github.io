import React from "react";
import styled from "styled-components";

const MainMenuContainer = styled.div`
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

export default function index() {
  return (
    <MainMenuContainer>
      <img src="/img/logo-wtm.png" />
    </MainMenuContainer>
  );
}
