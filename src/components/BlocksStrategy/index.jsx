import { BlocksStrategy } from "./style";
import { FiArrowUpRight } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";


function BlocksStrategyComponent() {
  return (
    <BlocksStrategy>
      <section className="section-one">
        <div className="descript">
          <h3>Estratégia!</h3>
          <h2>Agilidade na entrega é com a CDV!</h2>
          <p>
            Além da qualidade de todos os seus produtos, a CDV garante mais
            agilidade na entrega, afinal o processo de carga e descarga não
            exige nenhum esforço físico na hora de transportar os materiais.
            <br />
            <br />
            Por meio de uma descarga mecanizada e moderna, não há necessidade de
            esforço humano evitando assim acidentes e aumentando a agilidade na
            entrega.
          </p>
        </div>


        <div className="our-pilars">
          <h2>Atendemos diversas <br />obras, principalmente <br/>grandes construtoras!</h2>
          <p id="see">Veja só alguns de nossos pilares:</p>
          <div id="pilar1" className="pilars">
            <p><BsFillCheckCircleFill className="check" /> Versátil;</p>
            <p id="p2"><BsFillCheckCircleFill className="check" /> Econômico;</p>
          </div>
          <div id="pilar2" className="pilars">
            <p><BsFillCheckCircleFill className="check" /> Ecológico;</p>
            <p id="p4"><BsFillCheckCircleFill className="check" /> Obra Limpa e Rápida.</p>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div>
          <div>
            <h2>Aproveite!</h2>
            <p>Garanta o melhor custo benefício para sua obra!</p>
          </div>
        </div>
        <div>
          <button>
            <a href="#form">Fazer orçamento <FiArrowUpRight className="arrowUpRight" /></a>
          </button>
        </div>
      </section>
    </BlocksStrategy>
  );
}

export default BlocksStrategyComponent;
