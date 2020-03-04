import React from "react";
import styled from "styled-components";

const HeroWrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const CaptionSafeArea = styled.div``;

const CaptionHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  ${CaptionSafeArea} {
    margin: 15%;
    h1 {
      padding-bottom: 16px;
      font-size: 3.5rem;
      line-height: 3.875rem;
      letter-spacing: -0.05rem;
      font-weight: 600;
      color: #00bfa5;
      text-align: left;
    }
    p {
      padding-bottom: 40px;
      font-size: 1.5rem;
      font-weight: normal;
      letter-spacing: -0.02rem;
      line-height: 1.875rem;
      text-align: left;
    }
  }
  @media (max-width: 950px) {
  }
`;

const MainImageHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url("/img/main-image.jpg") no-repeat center center / cover;
  @media (max-width: 700px) {
    display: none;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  a {
    display: inline-flex;
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: -0.02rem;
    line-height: 1.5rem;
    text-align: center;
    align-self: center;
    color: #fff;
    box-shadow: rgba(21, 30, 41, 0.12) 0px 2px 8px 0px;
    cursor: pointer;
    padding: 10px 17px;
    border-radius: 4px;
    transition: all 200ms ease-in-out 0s;
    margin-right: 20px;
    :nth-child(1) {
      background: #5591f5;
    }
    :nth-child(2) {
      background: #06c1a7;
    }
    :hover {
      background: #353535;
    }
  }
`;

export default function index() {
  return (
    <HeroWrapperContainer>
      <CaptionHolder>
        <CaptionSafeArea>
          <h1>Participe do Woman Techmakers Petrópolis 2020!</h1>
          <p>
            O Women Techmakers é um programa da Google para incentivar as
            mulheres na área de tecnologia.
          </p>
          <ActionsWrapper>
            <a href="#">Confirmar Presença</a>
            <a href="#">Call for papers</a>
          </ActionsWrapper>
        </CaptionSafeArea>
      </CaptionHolder>
      <MainImageHolder />
    </HeroWrapperContainer>
  );
}
