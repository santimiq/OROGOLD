import React from "react"
import oportunidad from "../styles/oportunidad.scss"
import scrollTo from "gatsby-plugin-smoothscroll"


const Oportunidad = () => (
  <div className="group-oportunidad">
    <div>
      <img src={require("../images/ancha.jpg")} alt="" />
    </div>
    <div>
      <h3>no dejes pasar esta oportunidad</h3>
      <p>Sabías que un masaje debido a su acción calmante y analgésica viene dada mediante actos reflectos
      que afectan al sistema nervioso o esto causa la liberación de endorfinas que anulan las sensaciones de dolor en el
      cerebro. El estímulo de los mecanos receptores mediante el masaje se ha demostrado que alivia el dolor y la tensión muscular. </p>
      <button onClick={() => scrollTo('.chau')}>Reserva Ahora</button>
    </div>
  </div>
)

export default Oportunidad
