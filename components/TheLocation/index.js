import React from "react";
import styled from "styled-components";
import CircleIcon from "../../public/img/circle-1.svg";

const EventDescriptionContainer = styled.div`
  padding: 40px 8%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const EventTitle = styled.div`
  flex: 1;
  small {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: -0.01rem;
    line-height: 1rem;
    text-align: left;
    color: #00bfa5;
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
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const MapHolder = styled.div`
  flex: 2;
  margin-right: 5%;
  overflow: hidden;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.17);
  iframe {
    width: 100%;
    height: 550px;
  }
  @media (max-width: 700px) {
    flex: 1;
    margin: 0;
    width: 100%;
  }
`;

const DataLabel = styled.div`
  padding: 7px;
  border-radius: 4px;
  background: rgb(7, 193, 167);
  background: linear-gradient(
    167deg,
    rgba(7, 193, 167, 1) 50%,
    rgba(82, 144, 245, 1) 100%
  );
  color: #fff;
  width: fit-content;
  margin: 8px 0;
`;

const CircleHolder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  svg,
  path {
    stroke: #434343;
    z-index: 99;
    transform: rotate(180deg) translateY(-60%);
  }
`;

export default function index() {
  return (
    <EventDescriptionContainer>
      <MapHolder>
        <iframe
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.920782057943!2d-43.16994208447297!3d-22.507155185216572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a80775793707%3A0xaf669ccc3f450ddf!2sUniversidade%20Cat%C3%B3lica%20de%20Petr%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1583117379639!5m2!1spt-BR!2sbr"
        ></iframe>
      </MapHolder>
      <EventTitle>
        <small>Localização</small>
        <h2>Universidade Católica de Petrópolis</h2>
        <DataLabel>25/04 de 14h ás 19h</DataLabel>
      </EventTitle>
      <CircleHolder>
        <CircleIcon />
      </CircleHolder>
    </EventDescriptionContainer>
  );
}
