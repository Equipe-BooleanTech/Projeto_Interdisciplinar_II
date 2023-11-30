import React from "react";

const UserForm = ({ data, updateFieldHandler, pedidos, onSelectPedido }) => {
  return (
    <div>
      <div className="form-control">
        {pedidos.length > 0 ? (
          <div className="col-sm-3 m mx-auto p-2">
            <select
              className="form-select"
              aria-label="Default select example"
              value={data.selectedPedidoId}
              onChange={(e) => onSelectPedido(e.target.value)}
            >
              <option value="">Escolha um pedido</option>
              {pedidos.map((pedido) => (
                <option key={pedido.id} value={pedido.id}>
                  {pedido.id}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="col-sm-12 text-center">
            <p>Não há avaliações pendentes no momento.</p>
            <p>Que tal fazer uma nova compra?</p>
            <p>
              <a href="/app/novo-pedido" className="btn btn-primary">
                Ir para a página de compras
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
