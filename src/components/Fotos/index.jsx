import { NavLink } from "react-router-dom";
import Imgs from "../../assets/imgs-cdv-desktop.png";
import { Fotos } from "./style";

function FotosComponent() {
  return (
    <Fotos>
      <div className="containerFotos">
        <div className="contFotos" id="contFot1">
          <span>EFICIÊNCIA!</span>
          <h2>Veja como é nossa estrutura.</h2>
          <p>
            Aqui na CDV prezamos sempre pela qualidade e eficiência no trabalho.
            Ao lado está algumas imagens que mostram nosso comprometimento e
            cuidado com todo o processo.
          </p>
          <button><NavLink id="produtos" to="/produtos">Ver produtos </NavLink></button>
        </div>
        <div className="contFotos" id="contFot2">
          <figure>
            <img src={Imgs} alt="Fotos da Empresa" />
          </figure>
        </div>
      </div>
    </Fotos>
  );
}

export default FotosComponent;
