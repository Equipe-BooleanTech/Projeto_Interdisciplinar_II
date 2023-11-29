import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/userForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
import Navbar from "../../Components/Navbar/navbar";

//hooks
import { useForm } from "../PedidoForm/Hooks/UseForm";
import { useState } from "react";
import "../PedidoForm/PedidoForm.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function Avaliacao() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
  } = useForm(formComponents);

  return (
    <div>
      {" "}
      <Navbar />
      <div className="container-formulario">
        <div className="header">
          <h1 className="heading">Deixe sua avaliação</h1>
          <p style={{ textAlign: "center" }}>
            Ficamos felizes com sua compra, utilize o formulário abaixo para
            avaliar o produto!
          </p>
        </div>
        <div className="form-containers">
          <Steps currentStep={currentStep} />
          <form
            className="formularios"
            nSubmit={(e) => changeStep(currentStep + 1, e)}
          >
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Avaliacao;
