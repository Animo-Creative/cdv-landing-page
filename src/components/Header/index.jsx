import { Header } from "./style";
import { Outlet } from "react-router";
import LogoHeader from "../../assets/cdv-logo-branco1.svg";
import { NavLink } from "react-router-dom";

function HeaderComponent() {

  return (
    <>
      <Header>
        <div id="home">
          <figure>
            <img src={LogoHeader} alt="CDV - Blocos e pisos de concreto" />
          </figure>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/produtos">Produtos</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
          </ul>
        </div>
      </Header>
      <Outlet />
    </>
  );
}

export default HeaderComponent;
