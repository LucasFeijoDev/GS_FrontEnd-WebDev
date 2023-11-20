import React from "react";
import styled from "styled-components";

const SobrePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const SobrePageContainer2 = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 4px 3px #ddd;
  padding: 50px;
  text-align: center;
  max-width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  font-size: 18px;
  @media screen and (max-width: 960px) {
    max-width: 90%;
    }
`;

const SobrePageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;
const SobrePageText = styled.p`
  margin-bottom: 1em;
`;

function SobrePage() {
  return (
    <div className="sobrepage">
      <SobrePageContainer>
        <SobrePageContainer2>
          <SobrePageTitle>Quem somos</SobrePageTitle>
          <SobrePageText>
            O TechHealth surgiu para ajudar os hospitais no âmbito organizacional e interpessoal, garantindo um melhor atendimento para funcionários e pacientes. O software apresentará trabalhos de análise de dados, que dará aos funcionários de hospitais públicos e privados insights sobre quantidade de pacientes e quais são seus problemas, superlotação dos hospitais, distribuição do quadro de funcionários, etc.
          </SobrePageText>

          <SobrePageText>  
            Para os pacientes, o software contará com um histórico, atualizado por meio de APIs que enviam informações na hora que são prescritas por médicos e enfermeiros, de todos os medicamentos, exames e consultas realizadas.
          </SobrePageText>

          <SobrePageText>  
            Nesse contexto, o objetivo principal do TechHealth é criar um ambiente hospitalar mais eficiente, no qual a administração seja simplificada, o atendimento ao paciente seja aprimorado e a colaboração entre funcionários seja facilitada. Ao automatizar processos, fornecer informações em tempo real e garantir a precisão das informações médicas, ele visa elevar o padrão de cuidados de saúde oferecidos por hospitais públicos e privados.
          </SobrePageText>
        </SobrePageContainer2>
      </SobrePageContainer>
    </div>
  );
}

export default SobrePage;
