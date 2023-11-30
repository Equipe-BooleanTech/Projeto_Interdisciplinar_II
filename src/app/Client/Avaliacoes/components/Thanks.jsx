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
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <label key={i} className="radio-container">
          <input
            type="radio"
            value={i}
            name="review"
            checked={data.review === i}
            onChange={() => onNotaChange(i)}
            required
          />
          <AiOutlineStar />
        </label>
      );
    }
    return stars;
  };
  return (
    <>
      {selectPedidos && (
        <div className="review-form">
          <div className="form-control score-container">{renderStars()}</div>
          <div className="form-control">
            <h2>Detalhes do Pedido:</h2>
            <p>{selectPedidos.itensQuantidades}</p>
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
