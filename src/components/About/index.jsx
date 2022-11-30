import { About, NossosValores } from "./style";
import BackAboutUs from "../../assets/background-aboutus.png";
import Bar from "../../assets/bar-yellow-blue.svg";
import Credibilidade from "../../assets/ourValues/credibilidade.svg"
import EticaTransparencia from "../../assets/ourValues/etica-e-transparencia.svg"
import Lideranca from "../../assets/ourValues/lideranca.svg"
import Agilidade from "../../assets/ourValues/agilidade.svg"
import SolidezFinanceira from "../../assets/ourValues/solidez-financeira.svg"
import Resultado from "../../assets/ourValues/resultado.svg"
import CredibilidadeOrange from "../../assets/ourValues/credibilidade-orange.svg"
import EticaTransparenciaOrange from "../../assets/ourValues/etica-e-transparencia-orange.svg"
import LiderancaOrange from "../../assets/ourValues/lideranca-orange.svg"
import AgilidadeOrange from "../../assets/ourValues/agilidade-orange.svg"
import SolidezFinanceiraOrange from "../../assets/ourValues/solidez-financeira-orange.svg"
import ResultadoOrange from "../../assets/ourValues/resultado-orange.svg"


function AboutComponent() {
  let width = window.screen.width;

  
  const cred = width > 600 ? Credibilidade : CredibilidadeOrange
  const etic = width > 600 ? EticaTransparencia : EticaTransparenciaOrange
  const lide = width > 600 ? Lideranca : LiderancaOrange
  const agil = width > 600 ? Agilidade : AgilidadeOrange
  const soli = width > 600 ? SolidezFinanceira : SolidezFinanceiraOrange
  const resu = width > 600 ? Resultado : ResultadoOrange

  return (
    <About backAbout={BackAboutUs}>
      <div className="container">
        <div className="quemSomos">
          <h3>Qualidade garantida!</h3>
          <h2>Quem somos</h2>
          <p>
            A CDV Blocos e Pisos de Concreto foi criada com a missão de se
            tornar referência no mercado pela seriedade e agilidade dos nossos
            serviços, além de conquistar o reconhecimento de nossos
            colaboradores, clientes e parceiros por meio de soluções
            tecnológicas e foco contínuo nas necessidades do cliente e inovações
            em gerenciamento e fornecimento de blocos e pisos, com
            responsabilidade social e respeito com a natureza. <br />
            <br /> Nossa preocupação não consiste apenas em oferecer uma solução
            segura, tranquila e de qualidade para sua obra. Nos preocupamos
            também com todas as etapas, desde o recebimento da matéria-prima até
            o pós vendas. Por conta dessa qualidade, recebemos o selo de
            qualificação dos nossos processos e produtos.
          </p>
        </div>
        <div className="cont2">
          <div className="nossaHistoria">
            <h3>Comprometimento!</h3>
            <h2>Nossa história</h2>
            <p>
              A CDV nasceu da necessidade de inovar o mercado de construção
              civil com tecnologia de ponta, alinhada à responsabilidade
              ambiental e comprometimento com a qualidade e segurança de sua
              obra. <br />
              <br /> Fundada na cidade de Taubaté em 2021, por 3 cofundadores
              que trazem na bagagem décadas de experiência no ramo, nossa
              fábrica vem crescendo notoriamente e conquistando a confiança de
              nossos parceiros e colaboradores. Essa atmosfera se reflete em
              nossa produção e na jornada de nossos clientes, que têm todo
              suporte e orientação de um time comprometido com a realização dos
              seus sonhos e projetos.
            </p>
          </div>
          <figure>
            <img className="bar-yel-blu" src={Bar} alt="" /> 
          </figure>
        </div>
      </div>
      <NossosValores>
        <div className="textsContainer">
          <h3>Comprometimento!</h3>
          <div>
            <h2>Nossos valores</h2>
            <p>
              A CDV Blocos e Pisos têm o compromisso de valores de excelência.
            </p>
          </div>
        </div>
        <div className="imgsContainer">
          <figure>
            <img src={cred} alt="Credibilidade" />
            <figcaption>Credibilidade</figcaption>
          </figure>
          <figure>
            <img src={etic} alt="Etica e Transparencia" />
            <figcaption>Ética e Transparência</figcaption>
          </figure>
          <figure>
            <img src={lide} alt="Liderança" />
            <figcaption>Liderança</figcaption>
          </figure>
          <figure>
            <img src={agil} alt="Agilidade" />
            <figcaption>Agilidade</figcaption>
          </figure>
          <figure>
            <img src={soli} alt="Solidez Financeira" />
            <figcaption>Solidez Financeira</figcaption>
          </figure>
          <figure>
            <img src={resu} alt="Resultado" />
            <figcaption>Resultado</figcaption>
          </figure>
          
        </div>
      </NossosValores>
    </About>
  );
}

export default AboutComponent;
