import { BlocksResistance } from "./style";
import Concrete from "../../assets/concrete.png";
import BlockConstruction from "../../assets/block-construction.png";

function BlocksResistanceComponent() {
  return (
    <BlocksResistance
      backgroundTwo={BlockConstruction}
      backgroundThree={Concrete}
    >
      <div className="container-one">
        <div className="div-one">
          <div>
            <h3>Resistência!</h3>
            <h2>Blocos de concreto CDV é garantia de:</h2>
            <ul>
              <li>Economia em argamassa;</li>
              <li>Redução no uso do aço;</li>
              <li>Técnica de execução simples;</li>
              <li>Baixa manutenção dos blocos;</li>
              <li>Economia em acabamento;</li>
              <li>Resistência ao fogo;</li>
              <li>Bom isolamento térmico e acústico;</li>
              <li>Maior Durabilidade.</li>
            </ul>
          </div>
        </div>
        <div className="div-two">
          <figure>
            <img src={BlockConstruction} alt="Blocos" />
          </figure>
        </div>
      </div>

      <div className="container-two">
        <div className="div-three">
          <figure>
            <img src={Concrete} alt="Blocos" />
          </figure>
        </div>
        <div className="div-four">
          <div>
            <h3>O melhor acabamento!</h3>
            <h2>Pavimento intertravado CDV é garantia de:</h2>
            <ul>
              <li>Durabilidade independente de condições climáticas ou de agentes agressivos;</li>
              <li>Excelente acabamento estético;</li>
              <li>Ideais para pavimentação de ruas, calçadas e casas;</li>
              <li>Diversidade de cores e texturas homogêneas;</li>
              <li>Grande capacidade de permeabilização;</li>
              <li>Menor absorção de luz solar;</li>
              <li>Permitem acesso à rede subterrânea apenas com a retirada dos pisos.</li>
            </ul>
          </div>
        </div>
      </div>
    </BlocksResistance>
  );
}

export default BlocksResistanceComponent;
