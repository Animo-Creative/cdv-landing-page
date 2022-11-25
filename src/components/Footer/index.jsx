import { Footer } from "./style";
import { HiArrowUp } from "react-icons/hi"

function FooterComponent() {

  return (
    <Footer>
      <div>
        <p>&copy; 2022 - CDV Blocos e Pisos de Concreto</p>
        <button>Voltar ao topo <HiArrowUp className="arrow"/></button>
        
      </div>
    </Footer>
  );
};

export default FooterComponent