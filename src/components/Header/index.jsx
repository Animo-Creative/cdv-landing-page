import { Header } from "./style";
import { Outlet } from "react-router";
import LogoHeader from "../../assets/cdv-logo-branco1.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function HeaderComponent() {
  const [ linkId, setLinkId ] = useState("home")

  return (
    <>
      <Header linkId={linkId}>
        <div id="home">
          <figure>
            <img src={LogoHeader} alt="CDV - Blocos e pisos de concreto" />
          </figure>
          <ul>
            <li><NavLink id="home" to="/" onClick={(e) => setLinkId(`${e.target.id}`)}>Home</NavLink></li>
            <li><NavLink id="produtos" to="/produtos" onClick={(e) => setLinkId(`${e.target.id}`)}>Produtos</NavLink></li>
            <li><NavLink id="contato" to="/contato" onClick={(e) => setLinkId(`${e.target.id}`)}>Contato</NavLink></li>
          </ul>
        </div>
      </Header>
      <Outlet />
    </>
  );
}

export default HeaderComponent;
