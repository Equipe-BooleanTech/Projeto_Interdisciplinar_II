import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import "./ReviewForm.css";

const ReviewForm = ({
  data,
  updateFieldHandler,
  selectPedidos,
  avaliacao,
  nota,
  onAvaliacaoChange,
  onNotaChange,
}) => {
  return (
    <>
      {selectPedidos && (
        <div className="review-form">
          <div className="form-control score-container">
            <label className="radio-container">
              <input
                type="radio"
                value="1"
                name="review"
                checked={data.review === 1}
                onChange={(e) => onNotaChange(Number(e.target.value))}
                required
              />
              <AiOutlineStar />
            </label>
            <label className="radio-container">
              <input
                type="radio"
                value="2"
                name="review"
                checked={data.review === 2}
                onChange={(e) => onNotaChange(Number(e.target.value))}
                required
              />
              <AiOutlineStar />
            </label>
            <label className="radio-container">
              <input
                type="radio"
                value="3"
                name="review"
                checked={data.review === 3}
                onChange={(e) => onNotaChange(Number(e.target.value))}
                required
              />
              <AiOutlineStar />
            </label>
            <label className="radio-container">
              <input
                type="radio"
                value="4"
                name="review"
                checked={data.review === 4}
                onChange={(e) => onNotaChange(Number(e.target.value))}
                required
              />
              <AiOutlineStar />
            </label>
            <label className="radio-container">
              <input
                type="radio"
                value="5"
                name="review"
                checked={data.review === 5}
                onChange={(e) => onNotaChange(Number(e.target.value))}
                required
              />
              <AiOutlineStar />
            </label>
          </div>
          <div className="form-control">
            <h2>Detalhes do Pedido:</h2>
            <p>{selectPedidos.itens}</p>
            <label htmlFor="comment">Comentário:</label>
            <textarea
              name="comment"
              id="comment"
              placeholder="conte como foi sua experiência com o produto..."
              required
              value={avaliacao}
              onChange={(e) => onAvaliacaoChange(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewForm;
