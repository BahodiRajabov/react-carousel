import { useEffect, useState, useRef } from "react";
import Img1 from "../img/bridge.jfif";
import Img2 from "../img/peru.jpg";
import Img3 from "../img/road.jpg";
import arrowLeft from "../img/arrow-left-solid.svg";
import arrowRight from "../img/arrow-right-solid.svg";

const Dropdown = () => {
  const [index, setIndex] = useState(0);
  const carouselArr = [
    { src: Img1, title: "Savol nega ishladi buni ichida" },
    { src: Img2, title: "Agarda useEffectni ichida ref ishlatsak ishlaydi" },
    { src: Img3, title: "chunki u hamma narsa ishga tushganidan keyin ishga tushadi" },
    { src: Img1, title: "Savol nega ishladi buni ichida" },
    { src: Img2, title: "Agarda useEffectni ichida ref ishlatsak ishlaydi" }
  ]
  const itemRef = useRef()
  const prevButton = useRef()
  const nextButton = useRef()

  // Agarda useEffectni ichida ref ishlatsak ishlaydi chunki u hamma narsa ishga tushganidan keyin ishga tushadi
  // Savol nega ishladi buni ichida

  useEffect(() => {
    console.log(index);
    if (index === 0) {
      prevButton.current.classList.add("carousel__btn--disable")
    } else if (carouselArr.length - 1 === index) {
      nextButton.current.classList.add("carousel__btn--disable")
    } else {
      prevButton.current.classList.remove("carousel__btn--disable")
      nextButton.current.classList.remove("carousel__btn--disable")
    }
    itemRef.current.style.transform = `translateX(-${1000 * index}px)`
    itemRef.current.style.transition = `transform 0.3s ease`
  }, [index])

  return (
    <div className="carousel">

      <div className="carousel__inner">
        <div className="carousel__list" ref={itemRef}>
          {carouselArr.map((element) => (
            <div className="carousel__item">
              <h3 className="carousel__item-title">{element.title}</h3>
              <img src={element.src} className="carousel__item-img" alt={element.title} width="1000" height="450" />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel__btn carousel__btn--prev" type="button" onClick={() => setIndex(index - 1)} ref={prevButton}>
        <img src={arrowLeft} className="carousel__img" alt="prev button" width="24" height="24" />
      </button>
      <button className="carousel__btn carousel__btn--next" type="button" onClick={() => setIndex(index + 1)} ref={nextButton}>
        {/* nega index++ ishlamadi +> chunki ++ oginalni ozgartiradi + 1 esa yangi qiymat beradi */}
        <img src={arrowRight} className="carousel__img" alt="next button" width="24" height="24" />
      </button>
      <div class="carousel__indicators">
        {carouselArr.map((element, i) => (
          <button className={`carousel__indicators-btn ${i === index && "carousel__indicators-btn--active"}`} type="button" onClick={() => setIndex(i)}></button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
