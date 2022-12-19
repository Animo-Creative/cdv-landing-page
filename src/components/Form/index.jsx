import { FormContainer } from "./style";
import BackContFormDesktop from "../../assets/background-cont-form-desktop.svg";
import BackContFormMobile from "../../assets/background-cont-form-mobile.svg";
import Certificate from "../../assets/certificate-icon.svg";
import BarOne from "../../assets/bar-one.svg";
import { HiArrowDown } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import emailjs from "@emailjs/browser"


function FormComponent() {
  const [ cadastro, setCadastro ] = useState("Selecione")
  const [ type, setType ] = useState("Selecione")
  const [ quantity, setQuantity ] = useState("Selecione")

  const formSchema = yup.object().shape({
    nome: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Digite um e-mail válido"),
    telefone: yup
      .string()
      .required("Telefone obrigatório")
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        "Esse número está incorreto, tente algo assim: 11 91234 5678"
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    data.cadastro = cadastro;
    data.produto = type;
    data.quantidade = quantity;
    
    const message = `
      DADOS DO CLIENTE PARA ORÇAMENTO:
      
      Nome: ${data.nome}
      Email: ${data.email}
      Telefone: ${data.telefone}
      Cadastro: ${data.cadastro}
      Produto: ${data.produto}
      Quantidade: ${data.quantidade}
      `
      
      const templateParams = {
        from_name: data.nome,
      message: message,
      email: data.email
    }
    const nome = data.nome.split(" ")[0];
    toast
    .promise(emailjs.send("service_npzppie", "template_b4aj0ik", templateParams, "mDuzYWiP3rA_N7X1u"), {
      pending: {
        render() {
            return "Solicitando orçamento";
          },
        },
        success: {
          render() {
            return `Pronto ${nome}! Orçamento solicitado!`;
          },
        },
        error: "Ops, algo deu errado. Tente novamente!",
      })
      .then(() => {
        reset()
        setCadastro("Selecione")
        setType("Selecione")
        setQuantity("Selecione")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FormContainer
      backDesktop={BackContFormDesktop}
      backMobile={BackContFormMobile}
    >
      <section>
        <div className="divInfo">
          <h3>
            Referência no trabalho!{" "}
            <img className="certificate" src={Certificate} alt="" />
          </h3>
          <h1>
            A segurança que a sua obra merece com a agilidade que você precisa
          </h1>
          <p>
            A CDV garante mais qualidade, durabilidade e agilidade no
            fornecimento de Blocos, Pisos, Placas, Guias e Permeáveis, por meio
            de processos modernos e atendimento diferenciado para nossos
            clientes.
          </p>
          <button>
            <a href="#sobre-nos">
              Sobre nós <HiArrowDown className="arrowDown" />
            </a>
          </button>
          <img className="barOne" src={BarOne} alt="" />
        </div>
        <div className="divForm">
          <form id="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <p>Preencha abaixo para iniciar seu orçamento</p>
            <div>
              <label>
                Nome Completo{" "}
                {errors.nome && (
                  <span className="redSpan"> - {errors.nome.message}</span>
                )}
              </label>
              <input
                placeholder="Escreva aqui"
                type="text"
                {...register("nome")}
              />
            </div>

            <div>
              <label>
                E-mail{" "}
                {errors.email && (
                  <span className="redSpan"> - {errors.email.message}</span>
                )}
              </label>
              <input
                placeholder="Escreva aqui"
                type="email"
                {...register("email")}
              />
            </div>

            <div>
              <label>
                Telefone{" "}
                {errors.telefone && (
                  <span className="redSpan"> - {errors.telefone.message}</span>
                )}
              </label>
              <input
                mask="(00) 00000-0000"
                placeholder="Escreva aqui"
                type="phone"
                {...register("telefone")}
              />
            </div>

            <div>
              <label>Pessoa física ou jurídica</label>

              <div className="input-div">
                <select
                  name="cadastro"
                  id="cadastro"
                  className="selects"
                  required
                  value={cadastro}
                  onChange={(e) => setCadastro(e.target.value)}
                >
                  <option selected value="">
                    Selecione
                  </option>
                  <option value="Pessoa Física">Pessoa Física</option>
                  <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                </select>
              </div>
            </div>

            <div>
              <label>Tipo de Produto</label>

              <div className="input-div">
                <select
                  name="typeProduct"
                  id="typeProduct"
                  className="selects"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}

                >
                  <option selected value="">
                    Selecione
                  </option>
                  <option value="Blocos">Blocos</option>
                  <option value="Pisos">Pisos</option>
                </select>
              </div>
            </div>

            <div>
              <label>Quantidade</label>

              <div className="input-div">
                <select
                  name="quantity"
                  id="quantity"
                  className="selects"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option selected value="">
                    Selecione
                  </option>
                  <option value="Abaixo de mil">Abaixo de mil</option>
                  <option value="Acima de mil">Acima de mil</option>
                  <option value="Acima de 5 mil">Acima de 5 mil</option>
                  <option value="Acima de 10 mil">Acima de 10 mil</option>
                </select>
              </div>
            </div>

            <button type="submit">
              Fazer orçamento <FiArrowUpRight className="arrowUpRight" />
            </button>
          </form>
        </div>
      </section>
    </FormContainer>
  );
}

export default FormComponent;
