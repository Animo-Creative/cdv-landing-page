import BlocksResistanceComponent from "../../components/BlocksResistance";
import { motion } from "framer-motion";
import FooterComponent from "../../components/Footer";
import WallpaperOne from "../../assets/wallpaper-about-products.png";
import WallpaperTwo from "../../assets/wallpaper-about-products-tablet.png";
import { ProductsPage } from "./style";
import BlockConstruction from "../../assets/catalogo-desktop.png";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";

function Products() {
  const [download, setDownload] = useState("");
  const [display, setDisplay] = useState("none");

  const link =
    "https://docs.google.com/uc?export=download&id=1RN26T2XudKESwwc4eUK81ZgZFF2tG2DS";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductsPage wallpaperOne={WallpaperOne} wallpaperTwo={WallpaperTwo} display={display}>
        <section>
          <h1>Um pouco sobre nossos produtos</h1>
        </section>
        <BlocksResistanceComponent />

        <div className="container-one">
          <div className="div-one" id="div-download">
            <div>
              <h3>VARIEDADES!</h3>
              <h2>Soluções em artefatos de concreto.</h2>
              <p>
                Não perca tempo, aqui você encontra a solução que busca para a
                praticidade de sua obra!
              </p>
              <p>
                <span>Baixe agora</span> nosso catálogo digital clicando no
                botão abaixo e confira todos os nossos produtos disponíveis!
              </p>
              <figure>
                <img src={BlockConstruction} alt="Catálogo" />
              </figure>

              <button
                onClick={() => {
                  setDisplay("inline");
                  setDownload(link);
                  setTimeout(() => {
                    setDownload("");
                    setDisplay("none");
                  }, 5000);
                }}
              >
                Baixar Catálogo <FiDownload id="arrow" />
              </button>

              <span id="aviso">Seu download irá começar em instantes</span>

              {download && <iframe src={download}></iframe>}
            </div>
          </div>
          <div className="div-two" id="no-div">
            <figure id="figureDesktop">
              <img src={BlockConstruction} alt="Catálogo" />
            </figure>
          </div>
        </div>

        <FooterComponent />
      </ProductsPage>
    </motion.div>
  );
}

export default Products;
