import React from "react";
import { Result } from "antd";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export default () => {
  return (
    <MainContainer>
      <Result
        status="403"
        title="Página em Construção"
        subTitle="Estamos atualizando essa página, volte novamente mais tarde"
      />
    </MainContainer>
  );
};
