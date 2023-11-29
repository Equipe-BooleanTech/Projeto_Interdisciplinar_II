import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/navbar";
import "./ajuda.css";

function Ajuda() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <main>
          <form>
            <div style={{ marginBottom: "50px" }}>
              <h4>1. Prencha seus dados de cadastro</h4>
              <label>Nome completo:</label>
              <input
                className="ajuda__input"
                placeholder="Digite seu nome completo"
              />

              <label>Email Cadastrado na plataforma:</label>
              <input className="ajuda__input" placeholder="Digite seu email" />
            </div>

            <div>
              <h4>2. Digite sua mensagem (até 8000 caracteres)</h4>
              <textarea
                className="ajuda__textarea"
                placeholder="Digite sua mensagem da forma mais detalhada possivel"
                maxlength="8000"
              ></textarea>
            </div>

            <div style={{ margin: "10px" }}>
              <button className="submit">Enviar</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Ajuda;
