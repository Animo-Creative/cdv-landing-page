import { WhereAreWe } from "./style";
import LocalSvg from "../../assets/local.svg"
import { FiArrowUpRight } from "react-icons/fi";

function WhereAreWeComponent() {

  return (
    <WhereAreWe>
      <section>
        <div>
          <h3>Nosso Ambiente!</h3>
          <h2>Onde nós estamos?</h2>
          <p>Visite nossas instalações, estamos em Taubaté:</p>
          <div>
            <img src={LocalSvg} alt="" />
            <a target="blank" href="https://www.google.com/maps/dir//Rod.+Floriano+Rodrigues+Pinheiro,+km+06+-+Quiririm,+Taubat%C3%A9+-+SP,+12042-000/@-23.0110211,-45.7093503,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc57a91575f97f:0x8fc66251b6d0e5d5!2m2!1d-45.6393099!2d-23.0110365">
              Rod. Floriano Rodrigues Pinheiro, km 06 - Quiririm, Taubaté - SP
            </a>
          </div>
        </div>
        <div>
          <h2>Aproveite já!</h2>
          <p>Garanta o melhor custo benefício para sua obra!</p>
          <button><a href="#form">Fazer orçamento <FiArrowUpRight className="arrowUpRight"/></a></button>
        </div>
      </section>
    </WhereAreWe>
  );
};

export default WhereAreWeComponent