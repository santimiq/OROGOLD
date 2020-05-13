import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img
        src={require("../images/1.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src={require("../images/2.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src={require("../images/3.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src={require("../images/4.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src={require("../images/5.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src={require("../images/6.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src={require("../images/7.jpg")}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
    </AliceCarousel>
  )
}

export default Gallery
