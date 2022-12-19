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

function FormComponent() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Digite um e-mail válido"),
    cellphone: yup
      .string()
      .required("Telefone obrigatório")
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        "Esse número está incorreto, tente algo assim: 11 91234 5678"
      ),
    people: yup.string().required("Digite o nome de sua empresa"),
    type: yup.string().required("Digite o tipo de produto"),
    quantity: yup.string().required("Digite a quantidade"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    const name = data.name.split(" ")[0];
    toast.success(`Pronto ${name}!`);
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
                {errors.name && (
                  <span className="redSpan"> - {errors.name.message}</span>
                )}
              </label>
              <input
                placeholder="Escreva aqui"
                type="text"
                {...register("name")}
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
                {errors.cellphone && (
                  <span className="redSpan"> - {errors.cellphone.message}</span>
                )}
              </label>
              <input
                mask="(00) 00000-0000"
                placeholder="Escreva aqui"
                type="phone"
                {...register("cellphone")}
              />
            </div>

            <div>
              <label>Pessoa física ou jurídica</label>

              <div className="input-div">
                <select
                  name="cpfOrCnpj"
                  id="cpfOrCnpj"
                  className="selects"
                  required
                >
                  <option selected disabled value="">
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
                >
                  <option selected disabled value="">
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
                >
                  <option selected disabled value="">
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
