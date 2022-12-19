import React, { useEffect, useState } from "react";
import "./FarejadorStyle.css";

export default function Farejador() {
  const [data, setData] = useState([]);
  const[pesquisa, setPesquisa] = useState('');


  useEffect(() => {
    const fetchAPI = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q="+pesquisa;
      const response = await fetch(url);
      const objJason = await response.json();
      setData(objJason.results);
    };
    fetchAPI();
  }, [pesquisa]);

  return (
    <div>
        <input 
              className="pesquisa_produto" 
              type="search" 
              placeholder="Buscar"
              value={pesquisa}
              onChange={(ev)=> setPesquisa(ev.target.value)}
              />
      <div className="grade">
        {data.map((e) => (
          <div key={e.id} className="produto">
            <img src={e.thumbnail} alt="" className="produto_img" />
            <div className="produto_inf">
              <h4 className="produto_titulo">{e.title}</h4>
              <h4 className="produto_preço">R$ {e.price}</h4>
              <a className="produto_link" href={e.permalink} target="_blank" rel="noreferrer">
                Visitar Página do Produto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
