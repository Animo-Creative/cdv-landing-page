import { ContactUs } from "./style";
import LocalSvg from "../../assets/local.svg";
import Background from "../../assets/background-contato-desktop.png";
import Formulario from "../Formulario";


function ContactUsComponent() {

  return (
    <ContactUs backDesktop={Background}>
      <section>
        <div className="divInfo">
          <h3>APROVEITE!</h3>
          <h2>Entre em contato conosco e faça já um orçamento e garanta o melhor custo benefício para sua obra!</h2>
          <div>
            <h4>HORÁRIO DE FUNCIONAMENTO</h4>
            <p>De segunda à quinta: <span>07:00 – 17:00</span></p>
            <p>Sexta: <span>07:00 – 16:00</span></p>
          </div>
          <div>
            <div>
              <img src={LocalSvg} alt="" />
              <a target="blank" href="https://www.google.com/maps/dir//Rod.+Floriano+Rodrigues+Pinheiro,+km+06+-+Quiririm,+Taubat%C3%A9+-+SP,+12042-000/@-23.0110211,-45.7093503,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc57a91575f97f:0x8fc66251b6d0e5d5!2m2!1d-45.6393099!2d-23.0110365">
                Rod. Floriano Rodrigues Pinheiro, km 06 - Quiririm, Taubaté - SP
              </a>
            </div>
          </div>
        </div>
        <div className="divForm">
          <Formulario/>
        </div>
      </section>
    </ContactUs>
  );
};

export default ContactUsComponent