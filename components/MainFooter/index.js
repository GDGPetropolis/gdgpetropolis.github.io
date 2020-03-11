import React from "react";
import styled from "styled-components";
import {txtFooter} from "../Txt";

const MainFooterHolder = styled.div`
  margin: 4% 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 350px;
  }
  @media (max-width: 700px) {
    padding: 10% 0;
    margin: 0 8%;
    img{
      width: 80vw;
    }
  }
`;

const CopyrightHolder = styled.div`
  font-size: 0.9rem;
  max-width: 800px;
  text-align: center;
  color: #454545;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export default function index() {
  return (
    <MainFooterHolder>
      <img src="/img/gdg.png" />
      <CopyrightHolder>
        {txtFooter}
      </CopyrightHolder>
    </MainFooterHolder>
  );
}
