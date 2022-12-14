import React from "react";
import left from "../../../Imgs/left.png";
import right from "../../../Imgs/rigth.png";
import health from "../../../Imgs/health.png";
import patients from "../../../Imgs/patients.jfif";
import weed from "../../../Imgs/weed.jpg";
import { useState } from "react";
import styled from "styled-components";

const CarouselImg = styled.img`
  z-index: 1;
  width: 80vw;
  height: 70vh;
  opacity: 0.2;
  transition: 1s;
  @media screen and (orientation: portrait) {
    width: 100vw;
    height: 40vh;
  }
  @media screen and(max-width: 320px) {
    max-width: 100vw;
    width: 100vw;
    height: 50vh;
  }
  &.loaded {
    opacity: 1;
  }
`;

function Carousel() {
  const images = [health, patients, weed];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImg = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImg(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImg(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImg(selectedIndex, images);
  };
  return (
    <>
      <div className="my-6 w-98 h-6/12 flex flex-row justify-center portrait:w-screen">
        <CarouselImg
          src={selectedImg}
          alt="health"
          className={loaded ? "loaded" : ""}
          onLoad={() => {
            setLoaded(true);
          }}
        />
        <div className="absolute z-50 h-3/4 w-11/12 flex flex-row justify-around items-center portrait:h-2/5 portrait:w-screen portrait:justify-between">
          <button className="cursor-pointer" onClick={previous}>
            <img src={left} alt="flecha de direccion" />
          </button>
          <button className="cursor-pointer" onClick={next}>
            <img src={right} alt="flecha de direccion" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
