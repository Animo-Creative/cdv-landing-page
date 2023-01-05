import { ContactUs } from "./style";
import { FiArrowUpRight } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import BackgroundDesk from "../../assets/background-contato-desktop.png";
import BackgroundMob from "../../assets/background-contato-mobile.png";
import BackgroundTab from "../../assets/background-contato-tablet.png";
import Formulario from "../Formulario";

function ContactUsComponent() {
  return (
    <ContactUs backDesktop={BackgroundDesk} backMobile={BackgroundMob} backTablet={BackgroundTab}>
      <section>
        <div className="divInfo">
          <h3>APROVEITE!</h3>
          <h2>
            Entre em contato conosco e faça já um orçamento e garanta o melhor
            custo benefício para sua obra!
          </h2>
          <div className="divForm" id="formMobile">
            <Formulario />
          </div>

          <div className="hourAddress">
            <h4>HORÁRIO DE FUNCIONAMENTO</h4>
            <p>
              De segunda à quinta: <span>07:00 – 17:00</span>
            </p>
            <p>
              Sexta: <span>07:00 – 16:00</span>
            </p>
          </div>
          <div className="hourAddress">
            <h4>ENDEREÇO</h4>
            <a
              target="blank"
              href="https://www.google.com/maps/dir//Rod.+Floriano+Rodrigues+Pinheiro,+km+06+-+Quiririm,+Taubat%C3%A9+-+SP,+12042-000/@-23.0110211,-45.7093503,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc57a91575f97f:0x8fc66251b6d0e5d5!2m2!1d-45.6393099!2d-23.0110365"
            >
              Rod. Floriano Rodrigues Pinheiro, km 06 - Quiririm, Taubaté - SP
              <FiArrowUpRight id="fiArrowUpRight" />
            </a>
          </div>
          <p id="numberPhone">
            Se preferir ligue ou envie mensagem para:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=551239333601&text=Ol%C3%A1,%20eu%20vim%20o%20site%20de%20voc%C3%AAs,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20produtos"
              target="blank"
            >
              <span>
                +55 (12) 3933-3601 <RiWhatsappFill />
              </span>
            </a>
          </p>
        </div>
        <div className="divForm" id="formDesktop">
          <Formulario />
        </div>
      </section>
    </ContactUs>
  );
}

export default ContactUsComponent;
