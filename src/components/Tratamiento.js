import React from "react"
import Tipos from "./tipos"

import tratamiento from "../styles/tratamiento.scss"


const Tratamiento = () => (
  <div className="tratamiento">
    <div className="tratamiento-group">
      <div className="descripcion">
        <h3>nuestros tratamientos</h3>
        <p>
          El tratamiento de la casa de dos horas de duración transporta a los
          clientes a un oasis de relajación. Incluye un masaje de espalda,
          hombros, piernas y pies utilizando aceites de masaje
        </p>
      </div>
      <div className="tipos-de-tratamientos">
        <Tipos
          image={require("../images/tratamiento-1.jpg")}
          title="masajes con oro"
          text="SPA Orogold ofrece tratamientos especializados de la mano de nuestros
          profesionales expertos, con productos excepcionales de marcas galardonadas"
        />
        <Tipos
          image={require("../images/tratamiento-2.jpg")}
          title="exfoliación con productos naturales"
          text="El tratamiento de la casa de dos horas de duración transporta a los clientes a un oasis de relajación.
          Incluye un masaje de espalda, hombros, piernas y pies"
        />
        <Tipos
          image={require("../images/tratamiento-3.jpg")}
          title="Recontrucción facial"
          text="El tratamiento de la casa de dos horas de duración transporta a los clientes a un oasis de
          relajación. Incluye un masaje de espalda, hombros, piernas y pies"
        />
      </div>
    </div>
  </div>
)


export default Tratamiento
