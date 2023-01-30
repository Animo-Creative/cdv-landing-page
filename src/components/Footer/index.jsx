import { Footer } from "./style";
import { HiArrowUp } from "react-icons/hi"
import { AiFillInstagram } from "react-icons/ai"

function FooterComponent() {

  return (
    <Footer>
      <div>
        <p>&copy; 2022 - CDV Blocos e Pisos de Concreto | <a target="blank" href="https://www.instagram.com/cdvblocosepisos/"><AiFillInstagram/> Instagram</a></p>
        <button><a href="#home">Voltar ao topo</a> <HiArrowUp className="arrow"/></button>
      </div>
    </Footer>
  );
};

export default FooterComponent