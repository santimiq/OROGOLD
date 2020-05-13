import React from "react"
import sectionForm from "../styles/sectionForm.scss"


const SectionForm = () => {
  return (
    <div className="form">
      <div className="form-group">
        <div className="text-group">
          <h1>orogold</h1>
          <p>
            Cuando belleza y glamour <br/>van de la mano
          </p>
        </div>
        <div className="form-contact">
          <form>
            <h3>Reserva tu cita ahora </h3>
            <label>
              First name
              <input type="text" name="firstName" />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SectionForm
