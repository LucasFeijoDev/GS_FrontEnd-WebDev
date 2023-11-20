import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../Button/Button"
import { Link } from "react-router-dom";
import "./Slider.css";

// Importando  e definindo Slides 
import Slide2 from './images/Img01.jpg';
import Slide4 from './images/Img02.jpg';
import Slide3 from './images/Img03.jpg';

export const sliderData = [
    {
      image: Slide4,
      title: "Problemáticas da saúde no Brasil",
      text: "Veja o texto sobre as problemáticas da saúde no Brasil",
      path: "/consultas"
    },
    {
      image: Slide2,
      title: "Veja os insights!",
      text: "Veja as contas e pesquisas feitas pelo time de especialistas",
      path: "/insighs"
    },
    {
      image: Slide3,
      title: "Sobre nós",
      text: "Conheça a parte tecnológica do projeto",
      path: "/sobre"
    },

  ];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <hr />
                  <Link to={slide.path}>
                    <Button $primary>Saiba mais</Button>
                  </Link>  
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;