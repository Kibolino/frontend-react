import React from 'react'
import imgmockup from "./img/mockup.png";
import "./SobreStyle.css";

export default function Sobre() {
  return (
    <div className='conteiner'>
      <img class="img" src={imgmockup} alt="Mockup do projeto do site" />
        <article class="artigo">
          <h2>Mockup do projeto</h2>
          <br />
          <p>
            O projeto de site Farejador foi criado com objetivo de 
            obter pontos na matéria de Desenvolvimento de Sistema Web,
            ministrada por Professor Doutor Eduardo Ribeiro Felipe.
          </p>
          <br />
          <p>
            
          </p>
        </article>
    </div>
  )
}
