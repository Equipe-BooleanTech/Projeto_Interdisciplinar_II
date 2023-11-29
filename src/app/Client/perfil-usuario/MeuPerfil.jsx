import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import firebase from "firebase/app";
import "firebase/firestore";
import { AuthContext } from "../../Auth/Context/auth";
import "./styles.css";

function MeuPerfil() {
  const [userName, setUserName] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const { userID, logado, userType } = useContext(AuthContext);

  const getStatusDoPedido = (pedido) => {
    if (pedido.emAberto) {
      return "Em aberto";
    } else if (pedido.emAndamento) {
      return "Em andamento";
    } else if (pedido.concluido) {
      return "Concluído";
    } else if (pedido.cancelado) {
      return "Cancelado";
    } else {
      return null;
    }
  };

  useEffect(() => {
    async function LoadUserName() {
      try {
        if (logado && userType === "cliente") {
          const db = firebase.firestore();
          const UsuarioRef = db.collection("usuarios").doc(userID);
          const Usuario = await UsuarioRef.get();
          const username = Usuario.data().nomecompleto;

          setUserName(username);
        } else {
          console.log("Algo deu errado.");
        }
      } catch (error) {
        console.error("Erro ao carregar o nome do usuário:", error);
      }
    }

    async function LoadPedidos() {
      try {
        if (logado && userType === "cliente") {
          const db = firebase.firestore();
          const usuariosRef = db.collection("usuarios");
          const userRef = usuariosRef.doc(userID);
          const pedidosRef = userRef.collection("pedidos");

          const querySnapshot = await pedidosRef
            .orderBy("numero", "desc")
            .limit(1)
            .get();
          const pedidosData = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              dataPedido:
                data.dataPedido && data.dataPedido.toDate
                  ? data.dataPedido.toDate().toLocaleString()
                  : null,
            };
          });

          setPedidos(pedidosData);
        } else {
          console.log("Algo deu errado.");
        }
      } catch (error) {
        console.error("Erro ao carregar os pedidos:", error);
      }
    }

    LoadUserName();
    LoadPedidos();
  }, [userID, logado, userType]);

  return (
    <>
      <Navbar />
      <h1 className="welcome-heading">Bem-vindo(a), {userName}!</h1>
      <p className="welcome-message">Confira os seus pedidos já realizados!</p>
      <div className="dashboard">
        <section id="pedidos" className="ultimosPedidos">
          <br />
          <h2 className="ultimosPedidos__header">Últimos Pedidos</h2>
          <table className="table ultimosPedidos__body">
            <thead>
              <tr>
                <th>Número do Pedido</th>
                <th>Data do Pedido</th>
                <th>Status do Pedido</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.numero}</td>
                  <td>{pedido.dataPedido}</td>
                  <td>{getStatusDoPedido(pedido)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default MeuPerfil;
