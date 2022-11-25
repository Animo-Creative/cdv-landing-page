import { Header } from "./style";
import LogoHeader from "../../assets/cdv-logo-branco1.svg"

function HeaderComponent() {

  return (
    <Header>
      <div>
        <figure>
          <img src={LogoHeader} alt="CDV - Blocos e pisos de concreto" />
        </figure>
        <h2>Blocos e Pisos de concreto</h2>
      </div>
    </Header>
  );
};

export default HeaderComponent