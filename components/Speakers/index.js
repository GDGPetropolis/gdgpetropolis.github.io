import React from "react";
import styled from "styled-components";
import CircleIcon from "../../public/img/circle-1.svg";

const EventDescriptionContainer = styled.div`
  padding: 3% 8%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #00bfa5;
  @media (max-width: 700px) {
    padding: 10% 8%;
  }
`;

const EventTitle = styled.div`
  text-align: center;
  small {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: -0.01rem;
    line-height: 1rem;
    text-align: left;
    color: #fff;
    text-transform: uppercase;
  }
  h2 {
    max-width: 420px;
    font-size: 2.5rem;
    letter-spacing: -0.04rem;
    line-height: 3rem;
    font-weight: 300;
    margin: 0;
  }
`;

const Call4Papers = styled.div`
  text-align: center;
  p {
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: #fff;
    text-align: center;
    margin-top: 25px;
    max-width: 800px;
  }
  a {
    display: inline-flex;
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: -0.02rem;
    line-height: 1.5rem;
    text-align: center;
    align-self: center;
    color: #00bfa5;
    box-shadow: rgba(21, 30, 41, 0.12) 0px 2px 8px 0px;
    cursor: pointer;
    padding: 10px 17px;
    border-radius: 4px;
    transition: all 200ms ease-in-out 0s;
    margin: 0 auto;
    background: #fff;
  }
  @media (max-width: 950px) {
  }
`;

export default function index() {
  return (
    <EventDescriptionContainer>
      <EventTitle>
        <small>PALESTRANTES</small>
        <h2>Mulheres no Comando</h2>
      </EventTitle>
      <Call4Papers>
        <p>
          Ainda estamos em etapa de Call for Papers. Você é mulher e quer
          palestrar? Envie sua temática no link abaixo! Não se preocupe, o WTM
          não se trata apenas de programação, você pode falar sobre qualquer
          tema na área de tecnologia e(ou) empoderamento feminino no mercado de
          trabalho.
        </p>
        <a href="#">Quero ser uma Palestrante</a>
      </Call4Papers>
    </EventDescriptionContainer>
  );
}
