import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Inicio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="inicio-container">
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="/ima1.jpg" alt="Imagen 1" className="carousel-image" />
          </div>
          <div>
            <img src="/ima2.jpg" alt="Imagen 2" className="carousel-image" />
          </div>
          <div>
            <img src="/ima3.jpg" alt="Imagen 3" className="carousel-image" />
          </div>
        </Slider>
      </div>
      <div className="info-container">
        <h2>Venta de Laptops y PCs</h2>
        <p>Ofrecemos una amplia variedad de laptops y PCs a precios competitivos. Todos nuestros productos son de alta calidad y vienen con garantía. Visítanos para encontrar la mejor opción que se adapte a tus necesidades.</p>
      </div>
    </div>
  );
};

export default Inicio;