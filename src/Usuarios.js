import React, { useState, useEffect } from "react";
import axios from "axios";
import imgEdit from "./img/create-outline.svg";
import imgDelet from "./img/trash-outline.svg";
import './Usuarios.css';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const [senha, setSenha] = useState("");
  const url = "https://backendexpress-1fw51sr71-kibolino.vercel.app/";
  

  useEffect(() => {
    fetch(url + "usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }
  function limparDados() {
    setId("");
    setNome("");
    setEmail("");
    setTipo("");
    setSenha("");
  }
  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email, senha } = usuario;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEmail(email);
    setSenha(senha);
  }
  function apagarDados(cod) {
    axios.delete(url + "usuarios/" + cod).then(() => {
      //atualizar a lista
      setUsuarios(usuarios.filter((item) => item.id !== cod));
    });
  }
  function atualizaListaComNovoUsuario(response) {
    let { id, nome, email, senha } = response.data;
    let obj = { id: id, nome: nome, email: email, senha: senha };
    let users = usuarios;
    users.push(obj);
    setUsuarios(users);
    limparDados("");
  }
  function atualizaListaUsuarioEditado(response) {
    let { id } = response.data;
    const index = usuarios.findIndex((item) => item.id === id);
    let users = usuarios;
    users[index].nome = nome;
    users[index].email = email;
    users[index].senha = senha;
    setUsuarios(users);
    limparDados("");
  }
  function gravaDados() {
    if (nome !== "" && email !== "" && senha !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "usuarios", {
            nome: nome,
            email: email,
            senha: senha,
          })
          .then((response) => atualizaListaComNovoUsuario(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "usuarios/" + id, {
            id: id,
            nome: nome,
            email: email,
            senha: senha,
          })
          .then((response) => atualizaListaUsuarioEditado(response))
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }
  return (
    
    <div className="conteiner">
      {tipo === "" && (
        <>
        <div className="login-usuario">
        <h1 className="titulo-usuario">Acessar Farejador</h1>
  
        <div className="form-usuario">
        <label htmlFor="email">E-mail</label>
        <input
              type="text"
              name="txtNome"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
        </div>
        <div className="form-usuario">
        <label htmlFor="password">Senha</label>
        <input
              type="text"
              name="txtEmail"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
        </div>
        <button className="botao-usuario" type="button"  onClick={gravaDados}>
          Entrar
        </button>
        <button className="botao-usuario" type="button" onClick={novosDados}>
        Cria conta
        </button>
        </div>
        
        </>

      )}
     
      {tipo ? (
        <>
        <div className="login-usuario">
        <h1 className="titulo-usuario">Criar Farejador</h1>
          <div className="form-usuario">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="txtNome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="txtEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="txtEmail"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <div className="flex">
          <button className="botao-usuario" type="button" onClick={limparDados}>
            Cancelar
          </button>
          <button className="botao-usuario" type="button" onClick={gravaDados}>
            Gravar
          </button>
          </div>
          </div>
          </div>
        </>
      ) : (
        false
      )}
      {usuarios
        ? usuarios.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  {" "}
                  {item.id} - {item.nome} - {item.email} - {item.senha}{" "}
                  <img
                    alt="Editar"
                    src={imgEdit}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => editarDados(item.id)}
                  />
                  <img
                    alt="Apagar"
                    src={imgDelet}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => apagarDados(item.id)}
                  />
                </div>
              </div>
            );
          })
        : false}
    </div>
      
    
  );
}
