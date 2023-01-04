import { Header } from "./style";
import { Outlet } from "react-router";
import LogoHeader from "../../assets/cdv-logo-branco1.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function HeaderComponent() {
  const [ linkId, setLinkId ] = useState("home")
  const [ menu, setMenu ] = useState("none")

  return (
    <>
      <Header linkId={linkId} menu={menu}>
        <div id="home">
          <figure>
            <img src={LogoHeader} alt="CDV - Blocos e pisos de concreto" />
          </figure>
          <ul id="linksDesktop">
            <li><NavLink id="home" to="/" onClick={(e) => setLinkId(`${e.target.id}`)}>Home</NavLink></li>
            <li><NavLink id="produtos" to="/produtos" onClick={(e) => setLinkId(`${e.target.id}`)}>Produtos</NavLink></li>
            <li><NavLink id="contato" to="/contato" onClick={(e) => setLinkId(`${e.target.id}`)}>Contato</NavLink></li>
          </ul>
          <FiMenu id="menuHamb" onClick={() => setMenu("flex")}/>
        </div>
        <section id="linksMobile" style={{ display: menu }}>
          <ul>
            <li onClick={() => setMenu("none")}><NavLink id="Mobile" to="/" onClick={(e) => setLinkId(`${e.target.id}`)}>Home</NavLink></li>
            <li onClick={() => setMenu("none")}><NavLink id="produtosMobile" to="/produtos" onClick={(e) => setLinkId(`${e.target.id}`)}>Produtos</NavLink></li>
            <li onClick={() => setMenu("none")}><NavLink id="contatoMobile" to="/contato" onClick={(e) => setLinkId(`${e.target.id}`)}>Contato</NavLink></li>
          </ul>
        </section>
      </Header>
      <Outlet />
    </>
  );
}

export default HeaderComponent;
