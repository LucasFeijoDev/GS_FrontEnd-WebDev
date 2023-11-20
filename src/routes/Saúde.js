import React from "react";
import styled from 'styled-components';

const SaudeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
`;

const Textosaude = styled.p`
  margin-bottom: 1em;
  text-align: justify;
`;

function Consultas() {
  return (
    <div className="mappage">
      <SaudeContainer>
        <h1>Problemáticas da Saúde no Brasil</h1>
        <Textosaude>
          <p>
            A saúde no Brasil enfrenta diversas problemáticas que impactam diretamente a qualidade de vida da população e o funcionamento do sistema de saúde. Entre os desafios mais significativos, destacam-se a desigualdade no acesso aos serviços de saúde, a falta de infraestrutura adequada, a escassez de recursos financeiros, a má distribuição de profissionais da saúde, além de questões ligadas à prevenção e promoção da saúde.
          </p>
          <p>
            Uma das questões mais urgentes é a desigualdade no acesso aos serviços de saúde. O Brasil possui uma disparidade significativa entre as regiões, sendo que áreas urbanas geralmente têm melhores condições de atendimento em comparação com regiões rurais e periferias. Isso cria uma situação em que muitos brasileiros enfrentam dificuldades para obter cuidados médicos adequados, especialmente aqueles que vivem em condições socioeconômicas desfavoráveis.
          </p>
          <p>
            A infraestrutura precária também é um problema sério. Hospitais e centros de saúde muitas vezes carecem de equipamentos modernos, leitos em número suficiente e condições adequadas de higiene. Essa carência impacta diretamente na capacidade do sistema de saúde em lidar com emergências e atender a demanda crescente por serviços.
          </p>
          <p>
            A falta de recursos financeiros é outro ponto crítico. O sistema de saúde brasileiro, financiado principalmente pelo Sistema Único de Saúde (SUS), enfrenta constantes desafios orçamentários. Isso resulta em limitações na compra de medicamentos, na realização de procedimentos e na manutenção adequada das unidades de saúde.
          </p>
         </Textosaude>
      </SaudeContainer>
    </div>
  );
}

export default Consultas;
