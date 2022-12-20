import { FormContainer } from "./style";
import BackContFormDesktop from "../../assets/background-cont-form-desktop.svg";
import BackContFormMobile from "../../assets/background-cont-form-mobile.svg";
import Certificate from "../../assets/certificate-icon.svg";
import BarOne from "../../assets/bar-one.svg";
import { HiArrowDown } from "react-icons/hi";
import Formulario from "../Formulario";


function FormComponent() {

  return (
    <FormContainer
      backDesktop={BackContFormDesktop}
      backMobile={BackContFormMobile}
    >
      <section>
        <div className="divInfo">
          <h3>
            Referência no trabalho!{" "}
            <img className="certificate" src={Certificate} alt="" />
          </h3>
          <h1>
            A segurança que a sua obra merece com a agilidade que você precisa
          </h1>
          <p>
            A CDV garante mais qualidade, durabilidade e agilidade no
            fornecimento de Blocos, Pisos, Placas, Guias e Permeáveis, por meio
            de processos modernos e atendimento diferenciado para nossos
            clientes.
          </p>
          <button>
            <a href="#sobre-nos">
              Sobre nós <HiArrowDown className="arrowDown" />
            </a>
          </button>
          <img className="barOne" src={BarOne} alt="" />
        </div>
        <div className="divForm">
          <Formulario/>
        </div>
      </section>
    </FormContainer>
  );
}

export default FormComponent;
