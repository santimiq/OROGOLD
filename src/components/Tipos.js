import React from "react"
import tipo from "../styles/tipo.scss"

const Tipos = props => {
  <div className="tipo-group">
    <img src={props.image} alt=""/>
    <h5>{props.title}</h5>
    <p>{props.text}</p>
  </div>
}

export default Tipos
