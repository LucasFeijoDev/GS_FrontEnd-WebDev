import React from "react";
import styled from "styled-components";
import "../styles-sass/Insights.scss";

const InsightsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
`;

const InsightsTexto = styled.div`
  margin-bottom: 1em;
  text-align: justify;
`;

function Insights() {
  return (
    <div className="Insights">
      <InsightsContainer>
        <h1>Insights</h1>
          <InsightsTexto>
            <p>
            Segundo uma Pesquisa do Ministério da Saúde, realizada em parceria com o Instituto Brasileiro de Geografia e Estatística (IBGE), 71,1% da população foram a estabelecimentos públicos de saúde para serem atendidos, e 71,5% dos brasileiros não possuem qualquer serviço de saúde suplementar, como planos médicos-hospitalares ou odontológicos. Tais dados demonstram a importância da saúde pública na sociedade brasileira.
            </p>
            <p>
            O objetivo deste trabalho é aprimorar a gestão hospitalar por meio da previsão e otimização da lotação, utilizando cálculos derivativos. Para alcançar esse propósito, o software foi desenvolvido com base em métodos derivativos, permitindo analisar dados históricos de ocupação do hospital.
            </p>
            <p>
            A implementação desses cálculos possibilita a identificação dos pontos críticos de demanda, isto é, os picos de ocupação e os momentos de menor fluxo de pacientes. Essa análise preditiva oferece insights fundamentais para ajustar os horários de trabalho dos médicos, garantindo que estejam disponíveis em períodos de alta demanda e permitindo uma distribuição mais equilibrada dos pacientes ao longo do dia.
            </p>
            <p>
            Por meio de técnicas derivativas, o software examina a variação das taxas de ocupação ao longo do tempo, identificando tendências e padrões que orientam a tomada de decisões estratégicas na gestão hospitalar. A capacidade de antecipar essas flutuações possibilita não apenas uma alocação mais eficiente de recursos, mas também contribui para melhorar a qualidade do atendimento ao permitir uma atenção mais personalizada e adequada às necessidades dos pacientes, resultando em um sistema de saúde mais ágil e responsivo.
            </p>
          </InsightsTexto>
      </InsightsContainer>
    </div>
  );
}

export default Insights;
