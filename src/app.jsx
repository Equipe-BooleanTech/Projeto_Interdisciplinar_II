import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SecureRoute } from "./app/Components/SecureRoute/SecureRoute.jsx";

/* Paginas */
import Site from "./site/site.jsx";
import Login from "./app/Auth/Login/login";
import NovaConta from "./app/Auth/NovaConta/novaconta.jsx";
import ResetSenha from "./app/Auth/ResetSenha/resetsenha";
import Home from "./app/Admin/CRUD/Home/home.jsx";
import NovoCliente from "./app/Admin/CRUD/NovoCliente/novocliente.jsx";
import EditarCliente from "./app/Admin/CRUD/EditarCliente/editarcliente.jsx";
import MeuPerfil from "./app/Client/perfil-usuario/MeuPerfil.jsx";
import { Dashboard } from "./app/Admin/Dashboard/Dashboard.jsx";
import GerenciarPedidos from "./app/Admin/GerenciarPedidos/GerenciarPedidos.jsx";
import Avaliacao from "./app/Client/Avaliacoes/Avaliacao.jsx";
import Ajuda from "./app/Ajuda/Ajuda.jsx";
import AcompanharPedido from "./app/Client/AcompanharPedido/AcompanharPedido.jsx";
import PedidoForm from "./app/Client/PedidoForm/PedidoForm.jsx";
import PedidoFormAdmin from "./app/Admin/PedidoForm/PedidoFormAdmin.jsx";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Site} />
        <Route exact path="/app/login" component={Login} />
        <Route exact path="/app/novaconta" component={NovaConta} />
        <Route exact path="/app/resetsenha" component={ResetSenha} />
        <Route exact path="/app/ajuda" component={Ajuda} />

        <SecureRoute
          exact
          path="/app/admin/home"
          component={Dashboard}
          allowedUserType="admin"
        />
        <SecureRoute
          exact
          path="/app/admin/novocliente"
          component={NovoCliente}
          allowedUserType="admin"
        />
        <SecureRoute
          exact
          path="/app/admin/editarcliente/:id"
          component={EditarCliente}
          allowedUserType="admin"
        />
        <SecureRoute
          exact
          path="/app/admin/gerenciamento-clientes"
          component={Home}
          allowedUserType="admin"
        />

        <SecureRoute
          exact
          path="/app/admin/gerenciamento-pedidos"
          component={GerenciarPedidos}
          allowedUserType="admin"
        ></SecureRoute>

        <SecureRoute
          exact
          path="/app/meu-perfil"
          component={MeuPerfil}
          allowedUserType="cliente"
        />
        <SecureRoute
          exact
          path="/app/novo-pedido"
          component={PedidoForm}
          allowedUserType="cliente"
        />
        <SecureRoute
          exact
          path="/app/acompanhar-pedidos"
          component={AcompanharPedido}
          allowedUserType="cliente"
        ></SecureRoute>
        <SecureRoute
          exact
          path="/app/avaliar-pedidos"
          component={Avaliacao}
          allowedUserType="cliente"
        />
        <SecureRoute
          exact
          path="/app/admin/novo-pedido-admin"
          component={PedidoFormAdmin}
          allowedUserType="admin"
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
