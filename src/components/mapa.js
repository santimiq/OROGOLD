import React from "react"
import map from "../styles/mapa.scss"

const Mapa = () => (
  <div className="map-container">
    <div className="group">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3762.6974271558124!2d-99.1645727!3d19.425475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6b3dbaf75b%3A0x8c21bd502927d0f7!2sAv.%20Insurgentes%20Sur%20105%2C%20Roma%20Sur%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1589337193536!5m2!1ses-419!2smx"
          frameBorder={0}
        />
      </div>
      <div className="text">
        <div>
          <h5>Horarios</h5>
          <p>Lunes a viernes de 10:00 a 19:30</p>
          <p>Sábados, domingos y festivos de 10:00 a 18:30.</p>
          <p>
            Pueden concertarse tratamientos fuera del <br /> horario de apertura
            indicado con cita previa.
          </p>
        </div>
        <div>
          <h5>Dirección</h5>
          <p>
            Av.Insrugentes Sur 105, Roma Sur, Cuauhtémoc,
            <br /> 06600 Ciudad de México, CDMX, México
          </p>
          <button>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Av.+Insurgentes+Sur+105,+Roma+Sur,+Cuauht%C3%A9moc,+06600+Ciudad+de+M%C3%A9xico,+CDMX/@19.425475,-99.1645727,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff6b3dbaf75b:0x8c21bd502927d0f7!8m2!3d19.425475!4d-99.162384"
            >
              Ver en Mapa
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Mapa




