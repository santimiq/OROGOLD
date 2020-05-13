import React from "react"
import sectionForm from "../styles/sectionForm.scss"


const SectionForm = () => {
  return (
    <div className="form">
      <div className="form-group">
        <div className="text-group">
          <h1>orogold</h1>
          <p>
            Cuando belleza y glamour <br />
            van de la mano
          </p>
        </div>
        <div className="form-contact">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <h3>Reserva tu cita ahora </h3>
            <input type="text" name="name" placeholder="nombre" />

            <input type="email" name="email" placeholder="email" />
            <input type="tel" name="phone" placeholder="telefono" />

            <button type="submit">Reservar Ahora</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SectionForm
