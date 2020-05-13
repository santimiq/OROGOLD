import React from "react"
import nosotros from "../styles/nosotros.scss"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Gallery from "../components/carousel"


const Nosotros = () => (
  <div className="quienes-somos">
    <h4>Quienes somos</h4>
    <div>
      <span>
        El lujoso spa en Orogold, en México, ofrece un refugio sublime en pleno
        corazón de la ciudad.
      </span>
    </div>
    <p>
      Los huéspedes pueden disfrutar de un gimnasio de última generación, una
      relajante sauna o duchas a chorro durante su escapada de 5 estrellas en
      nuestro hotel boutique en Paris. Por otra parte, nueva asociación con ZEAL
      COSMETICS asegura la disponibilidad de una gama de relajantes tratamientos
      faciales y corporales para mimarse y revitalizarse.
    </p>
    <div>
      <Gallery />
    </div>
  </div>
)

export default Nosotros
