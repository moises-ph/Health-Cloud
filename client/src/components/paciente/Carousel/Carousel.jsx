import React from "react";
import left from '../../../Imgs/left.png'
import right from '../../../Imgs/rigth.png'
import health from '../../../Imgs/health.png'
import patients from '../../../Imgs/patients.jfif'
import weed from '../../../Imgs/weed.jpg'
import { useState } from "react";
import styled from 'styled-components'

const CarouselImg = styled.img`
max-width: 800px;
z-index: 1;
width: 100%;
height: 70vh;
opacity: 0.2;
transition: 1s;
&.loaded{
	opacity: 1;
}
`;

function Carousel() {
	const images = [health, patients, weed];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(images[0]);
	const [loaded, setLoaded] = useState(false);

	const selectNewImg = (index, images, next = true) => {
		setLoaded(false)
		setTimeout(()=>{
			const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
			const nextIndex = next ?(condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
			setSelectedImg(images[nextIndex])
			setSelectedIndex(nextIndex) 
		},500)
	}

	const previous = () => {
		selectNewImg(selectedIndex, images, false)
	}

	const next = () => {
		selectNewImg(selectedIndex, images)
	}
  return (
	<>
		<div className="my-6 w-screen h-6/12 flex flex-row justify-center">
			<CarouselImg src={selectedImg} alt='health' className={loaded ? 'loaded' : ''} onLoad={()=>{setLoaded(true)}}/>
			<div className="absolute z-50 h-3/4 w-full flex flex-row justify-around items-center" >
				<button className="cursor-pointer" onClick={previous}><img src={left} /></button>
				<button className="cursor-pointer" onClick={next}><img src={right} /></button>
			</div>
		</div>
	</>
	);
}

export default Carousel;
