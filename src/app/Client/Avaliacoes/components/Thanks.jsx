import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./Thanks.css";

const emojiData = {
  1: <AiOutlineStar />,
  2: <AiOutlineStar />,
  3: <AiOutlineStar />,
  4: <AiOutlineStar />,
  5: <AiOutlineStar />,
};

const Thanks = ({ data, selectPedidos, avaliacao, nota }) => {
  return (
    <>
      {selectPedidos && (
        <div className="thanks-container">
          <h2>Falta Pouco...</h2>
          <p>A sua Opinião é muito importante para nós</p>
          <p>Para concluir sua avaliação clique no botão de Enviar abaixo</p>
          <h3>
            Aqui esta o resumo da sua avaliação do Pedido :{selectPedidos.id}
          </h3>
          <p className="review-data">
            <span>Satisfação com o produto:</span>
            {emojiData[nota]}
          </p>
          <p className="review-data">
            <span>Comentário:</span>
            {avaliacao}
          </p>
        </div>
      )}
    </>
  );
};

export default Thanks;
