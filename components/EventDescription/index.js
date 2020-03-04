import React from "react";
import styled from "styled-components";
import CircleIcon from "../../public/img/circle-1.svg";

const EventDescriptionContainer = styled.div`
  padding: 8% 8%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const EventTitle = styled.div`
  flex: 1.8;
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
`;

const DescriptionBox = styled.div`
  max-width: 60%;
  @media (max-width: 700px) {
    max-width: 100%;
    text-align: justify;
  }
`;

const CircleHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  svg,
  path {
    stroke: #434343;
    z-index: 99;
  }
`;

export default function index() {
  return (
    <EventDescriptionContainer>
      <EventTitle>
        <small>Woman Techmakers</small>
        <h2>Empoderamento Feminino e Tecnologia</h2>
      </EventTitle>
      <DescriptionBox>
        <p>
          O Women Techmakers é um programa global lançado em 2012 por Megan
          Smith, que na altura era vice-presidente da Google, com o intuito de
          criar uma comunidade global de mulheres ligadas à tecnologia. Desde
          então, diversos grupos independentes se reúnem em mais de 50 países
          para promover a participação feminina através de workshops, palestras
          e eventos, sendo assim, nós do GDG Petrópolis iremos realizar a nossa
          parcela pela causa e sediar mais um WTM Petrópolis!
        </p>
        <p>
          O nosso evento não tem a intenção de ser apenas para mulheres, mas de
          enfatizarem a participação de mulheres. Todos os públicos podem contar
          com muito conteúdo, aprendizado e networking!
        </p>
        <p>
          O Women Techmakers não é uma solução final, mas um passo na direção de
          melhorar a igualdade nas áreas de Ciências, Tecnologia, Engenharia e
          Matemática entre outras. O GDG Mulheres começou quando um grupo de
          mulheres percebeu uma lacuna na participação de mulheres nos encontros
          do GDG e quiseram fazer alguma coisa sobre isso. O Women Techmakers
          começou de um jeito parecido por Megan Smith, que viu uma oportunidade
          de amplificar as vozes das líderes ténicas ao redor dela, para
          inspirar futuras gerações. Sendo dito isso, gênero não é nem de longe
          o único problema de diversidade na tecnologia. Como uma comunidade
          global, esse problema é exponencialmente mais complexo, já que
          situação econômica, educação, histórico familiar, origem étnica ou
          nacional e até mesmo religião tem diferentes significados em
          diferentes culturas. Nós pedimos que todos os membros de GDGs, líderes
          do Women Techmakers ou não, para trabalhar para criar um ambiente de
          inclusão.
        </p>
      </DescriptionBox>
      <CircleHolder>
        <CircleIcon />
      </CircleHolder>
    </EventDescriptionContainer>
  );
}
