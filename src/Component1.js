import React from "react";
import { useState, useEffect } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Component1() {
  const [contador, setcontador] = useState(0);

  function incContador() {
    setcontador(contador + 1);
  }
  const decrement = function decContador() {
    setcontador((contador) => contador - 1);
  };
  //comparação com componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  });
  //comparação com componentDidMount (array de dependencias para ser Mount)
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  const [dados, setDados] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, [url]);

  return (
    <>
      <div>Componente de exemplo na aula dev</div>
      <p>
        {" "}
        Podemos já vislumbrar o modo pelo qual a execução dos pontos do programa
        facilita a criação do sistema de participação geral. Por outro lado, a
        determinação clara de objetivos cumpre um papel essencial na formulação
        do investimento em reciclagem técnica. Assim mesmo, a hegemonia do
        ambiente político maximiza as possibilidades por conta do levantamento
        das variáveis envolvidas. Evidentemente, a revolução dos costumes
        estimula a padronização dos métodos utilizados na avaliação de
        resultados.
      </p>
      <button onClick={incContador}> Incrementa</button>
      <p>{contador}</p>
      <button onClick={decrement}> Decrementar</button>

      {dados.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name} -- </span>
            <span>{item.email} </span>
          </div>
        );
      })}
      <UsuariosTabela dados={dados}/>
    </>
  );
}
